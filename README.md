SearchLight
===========

JavaScript searching and filtering with an easy to read interface

Installation
------------

**NPM**

    npm install search-light

**Yarn**

    yarn add search-light

**CDN**

    <script src="https://unpkg.com/search-light"></script>


Usage
-----

**ES6**

    import search from 'search-light';
    let matches = search(collection).for('search text')
                                    .and('list')
                                    .matches;

**CND**

    var matches = window._search(collection).for('search text')
                                            .and('list')
                                            .matches;