# agroJSON - A JSON schema for agriculture
agroJSON is a [JSON schema]() designed to simplify client-server communication along the agricultural production and supply chain. It closely follows the specifications made by 
[agroXML](http://195.37.233.20/), however introduces some simplifications geared towards (client side) web use.

## Why not use agroXML?
XML and JSON both have their benefits. However, XML shines with features like
`attributes`, `namespacing`, and well established schema validation. This makes it 
especially suitable for the heterogenous requirements present in the agricultural 
production and supply chain. In server-to-server, Java and many other environments, agroXML should therefore remain the preferred way of communication.

With the establishment and uptake of modern web frameworks such as [Angular](https://angularjs.org/), 
[React](https://reactjs.org/) and [Vue](https://vuejs.org/), feature-rich client 
applications are becoming more and more popular. In most cases, these client applications
directly leverage [RESTful API's](https://de.wikipedia.org/wiki/Representational_State_Transfer) in order 
to provide content to their users. Since these client applications are largely written in 
JavaScript, and JSON (**J**ava**S**cript **O**bject **N**otation) being natively supported to be parsed by JavaScript, using JSON has become a de-facto standard for exchanging data between web services and clients. agroJSON aims to be a drop-in replacement for agroXML in client-server scenarios where JSON would be preferred over XML.

## Differences to agroXML
In agroXML, spatial data is written in a subset (profile) of [Geography Markup Language (GML)](https://www.opengeospatial.org/standards/gml), being an XML grammar. As agroJSON builds on the JSON format, [GeoJSON](https://de.wikipedia.org/wiki/GeoJSON) is used to describe spatial data instead. An advantage of using GeoJSON as the default spatial data format is that all of the popular JavaScript mapping libraries, e.g. [Leaflet](https://leafletjs.com/examples/geojson/), [Mapbox](https://docs.mapbox.com/mapbox-gl-js/example/geojson-polygon/), [OpenLayers](https://openlayers.org/en/latest/examples/geojson.html), as well as [Google Maps](https://developers.google.com/maps/documentation/javascript/datalayer), support GeoJSON out of the box.
In order to maximize compatibility with these mapping services, coordinates are
represented using the [**Web Mercator Projection**](https://en.wikipedia.org/wiki/Web_Mercator_projection) (WGS 84, EPSG:3857) instead of the ETRS89/EPSG:25832 projection commonly used in Europe.

