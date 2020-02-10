# Dinero Frontend Test

**Opgavebeskrivelse:**
Du skal bygge en ny angular-applikation. Applikationen skal gøre brug af det åbne Starwars API (Swapi) og bygge to sider ud fra data derfra.

Den første side skal bestå af en liste over planeterne, man kan hente fra Swapi. Bare den første side – du skal ikke lave pagination. På denne side skal man kunne trykke på en planet i listen og komme til en underside, der viser detaljer om planeten, man har trykket på.

Listesiden skal du selv “designe”, mens undersiden med detaljerne om planeten har et vedhæftet design, du skal følge. Designet er relativt simpelt, så der er plads til personlige touches.

***Opgaver:***
- 1.
  - 1.1 Lav en side som tilgås via /planets
  - 1.2 Hent planeterne fra https://swapi.co/api/planets
  - 1.3 Vis resultatet fra swapi på din nye side. Det kan laves som en simpel liste, cards, eller hvad end du synes.
  - 1.4 Hvert item skal linke til sin underside /planets/{planetId}

- 2.
  - 2.1 Lav en side som tilgås via /planets/{id}
  - 2.2 Hent planetens data fra https://swapi.co/api/planets/{id}
  - 2.3 Implementer det vedhæftede design og vis dataerne fra API’et
