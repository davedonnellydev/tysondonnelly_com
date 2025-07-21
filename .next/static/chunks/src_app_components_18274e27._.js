(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/styles/gallery.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "filmImg": "gallery-module__QTcrpq__filmImg",
  "filmTitle": "gallery-module__QTcrpq__filmTitle",
  "gallery": "gallery-module__QTcrpq__gallery",
  "galleryTile": "gallery-module__QTcrpq__galleryTile",
  "imgContainer": "gallery-module__QTcrpq__imgContainer",
});
}),
"[project]/src/app/components/gallery.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Film_Gallery
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$styles$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/components/styles/gallery.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Film_Gallery() {
    _s();
    /* ADD NEW FILMS

First, add the film's poster image to the public/films folder.

Then add the new film's info as an object to the top of the film list array below (film_list) and it will appear in the order they're listed in the array. You should format the object as follows:

    {
      title: "TITLE HERE",
      img_url: "./films/filename.jpg",
      alt: "IMAGE DESCRIPTION",
    },

 */ const film_list = [
        {
            title: "SINNERS",
            img_url: "./films/sinners.jpg",
            alt: "SINNERS"
        },
        {
            title: "FURIOSA",
            img_url: "./films/furiosa.jpg",
            alt: "FURIOSA"
        },
        {
            title: "D&D: Honor Among Thieves",
            img_url: "./films/dnd_honor_among_thieves.jpeg",
            alt: "D&amp;D: Honor Among Thieves"
        },
        {
            title: "MATRIX RESURRECTIONS",
            img_url: "./films/matrix_resurrections.jpg",
            alt: "MATRIX RESURRECTIONS"
        },
        {
            title: "GODMOTHERED",
            img_url: "./films/godmothered.jpg",
            alt: "GODMOTHERED"
        },
        {
            title: "THE LETTER FOR THE KING",
            img_url: "./films/letter_for_the_king.jpg",
            alt: "THE LETTER FOR THE KING"
        },
        {
            title: "ALADDIN",
            img_url: "./films/aladdin.jpg",
            alt: "ALADDIN"
        },
        {
            title: "THE NUTCRACKER AND THE FOUR REALMS",
            img_url: "./films/nutcracker.jpg",
            alt: "THE NUTCRACKER AND THE FOUR REALMS"
        },
        {
            title: "A WRINKLE IN TIME",
            img_url: "./films/a_wrinkle_in_time.jpg",
            alt: "A WRINKLE IN TIME"
        },
        {
            title: "STAR WARS: THE LAST JEDI",
            img_url: "./films/star_wars.jpg",
            alt: "STAR WARS: THE LAST JEDI"
        },
        {
            title: "KING ARTHUR: LEGEND OF THE SWORD",
            img_url: "./films/king_arthur.jpg",
            alt: "KING ARTHUR: LEGEND OF THE SWORD"
        },
        {
            title: "ASSASSIN'S CREED",
            img_url: "./films/assassins_creed.jpg",
            alt: "ASSASSIN'S CREED"
        },
        {
            title: "AVENGERS: AGE OF ULTRON",
            img_url: "./films/avengers_age_of_ultron.jpg",
            alt: "AVENGERS: AGE OF ULTRON"
        },
        {
            title: "ALLEGIANT",
            img_url: "./films/allegient.jpg",
            alt: "ALLEGIANT"
        },
        {
            title: "INSURGENT",
            img_url: "./films/insurgent.png",
            alt: "INSURGENT"
        },
        {
            title: "HUNGER GAMES: CATCHING FIRE",
            img_url: "./films/hunger_games.png",
            alt: "HUNGER GAMES: CATCHING FIRE"
        },
        {
            title: "IRON MAN 3",
            img_url: "./films/iron_man_3.jpg",
            alt: "IRON MAN 3"
        },
        {
            title: "THE LEGO MOVIE",
            img_url: "./films/the_lego_movie.png",
            alt: "THE LEGO MOVIE"
        },
        {
            title: "THE AVENGERS",
            img_url: "./films/avengers.jpg",
            alt: "THE AVENGERS"
        },
        {
            title: "UNBROKEN",
            img_url: "./films/unbroken.png",
            alt: "UNBROKEN"
        },
        {
            title: "X-MEN: DAYS OF FUTURE PAST",
            img_url: "./films/xmen.jpg",
            alt: "X-MEN: DAYS OF FUTURE PAST"
        },
        {
            title: "TVC",
            img_url: "./films/TVC.jpg",
            alt: "TVC"
        }
    ];
    const oneColumn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])("(max-width:650px)");
    const twoColumn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])("(min-width:650px) and (max-width:1220px)");
    const threeColumn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])("(min-width:1220px)");
    let count = 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$styles$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gallery,
        children: film_list.map((film, key)=>{
            count += 1;
            if (threeColumn) {
                if (count > 3) {
                    count = 1;
                }
            }
            if (twoColumn) {
                if (count > 2) {
                    count = 1;
                }
            }
            if (oneColumn) {
                count = 1;
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$styles$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].galleryTile,
                style: {
                    gridColumnStart: count,
                    gridColumnEnd: count + 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$styles$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imgContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$styles$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filmImg,
                            alt: film.alt,
                            src: film.img_url
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/gallery.tsx",
                            lineNumber: 171,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/gallery.tsx",
                        lineNumber: 170,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$styles$2f$gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filmTitle,
                        children: film.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/gallery.tsx",
                        lineNumber: 177,
                        columnNumber: 13
                    }, this)
                ]
            }, key, true, {
                fileName: "[project]/src/app/components/gallery.tsx",
                lineNumber: 165,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/app/components/gallery.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_s(Film_Gallery, "mHJlKrzBxsn8rjB7HN3hdkY4uJ0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"]
    ];
});
_c = Film_Gallery;
var _c;
__turbopack_context__.k.register(_c, "Film_Gallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_components_18274e27._.js.map