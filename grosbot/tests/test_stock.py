from grosbot.stock import (
    cents_to_cad,
    extract_needles,
    format_hits,
    has_clear_products,
    parse_store_products,
)


def test_clear_products_from_client_mail():
    assert has_clear_products("10 tables cocktail + nappes") is True
    assert has_clear_products("merci pour le lien de dépôt") is False
    assert "tables" in extract_needles("10 tables cocktail + photobooth")


def test_parse_store_keeps_catalog_price_never_invents():
    hits = parse_store_products(
        [
            {
                "name": "L&rsquo;Anniversaire VIP",
                "permalink": "https://evenox.ca/product/table-pour-enfant/",
                "slug": "table-pour-enfant",
                "prices": {"price": "1000", "currency_minor_unit": 2},
            }
        ]
    )
    assert hits[0].name == "L’Anniversaire VIP"
    assert hits[0].price_cad == "10,00 $"
    assert cents_to_cad("bad") is None
    assert parse_store_products({"error": "no"}) == ()
    line = format_hits(hits)[0]
    assert "L’Anniversaire VIP" in line
    assert "10,00 $" in line
    assert "evenox.ca/product" in line
