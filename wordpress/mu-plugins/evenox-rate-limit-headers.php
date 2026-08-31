<?php
/**
 * Plugin Name: Evenox — Retry-After sur 429 WordPress
 * Description: Si WordPress ou une extension répond 429, ajoute Retry-After: 60. N'a aucun effet sur les 429 du CDN Hostinger (ils n'atteignent jamais PHP).
 * Version: 1.0.0
 * Author: Évenox
 *
 * Installation (optionnelle) : copier ce fichier dans
 *   wp-content/mu-plugins/evenox-rate-limit-headers.php
 *
 * Ne change rien aux réponses 200 / 3xx / autres 4xx.
 * Inutile pour le « HTTP ERROR 429 » Chrome à corps vide (hCDN) :
 * voir docs/http-429.md.
 */

defined('ABSPATH') || exit;

/**
 * Envoie Retry-After seulement si le statut est déjà 429
 * et que l'en-tête n'est pas déjà présent.
 */
function evenox_retry_after_on_wp_429(): void
{
    if (headers_sent()) {
        return;
    }

    if ((int) http_response_code() !== 429) {
        return;
    }

    foreach (headers_list() as $header) {
        if (stripos($header, 'Retry-After:') === 0) {
            return;
        }
    }

    header('Retry-After: 60', false);
}

add_action('send_headers', 'evenox_retry_after_on_wp_429', 99);
add_action('shutdown', 'evenox_retry_after_on_wp_429', 0);

add_filter(
    'rest_post_dispatch',
    static function ($response) {
        if (!($response instanceof WP_REST_Response)) {
            return $response;
        }

        if ((int) $response->get_status() !== 429) {
            return $response;
        }

        $headers = $response->get_headers();
        if (is_array($headers)) {
            foreach (array_keys($headers) as $name) {
                if (strcasecmp((string) $name, 'Retry-After') === 0) {
                    return $response;
                }
            }
        }

        $response->header('Retry-After', '60', false);

        return $response;
    },
    99
);
