(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/auth/spotify/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpotifyLogin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$spotify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/spotify.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SpotifyLogin() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpotifyLogin.useEffect": ()=>{
            async function initLogin() {
                try {
                    const settings = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$spotify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpotifySettings"])();
                    const codeVerifier = generateCodeVerifier();
                    const codeChallenge = await generateCodeChallenge(codeVerifier);
                    // Store codeVerifier in sessionStorage
                    sessionStorage.setItem('spotify_code_verifier', codeVerifier);
                    const params = new URLSearchParams({
                        client_id: settings.clientId,
                        response_type: 'code',
                        // TEMPORAL: http://localhost:3000 exactamente (sin path)
                        redirect_uri: 'http://localhost:3000',
                        scope: 'user-read-private user-read-email playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private',
                        code_challenge: codeChallenge,
                        code_challenge_method: 'S256'
                    });
                    const authUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;
                    window.location.href = authUrl;
                } catch (error) {
                    console.error('Error initiating login:', error);
                    alert('Error loading settings. Please configure Spotify settings first.');
                    router.push('/settings');
                }
            }
            initLogin();
        }
    }["SpotifyLogin.useEffect"], [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Redirecting to Spotify..."
    }, void 0, false, {
        fileName: "[project]/app/auth/spotify/login/page.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
_s(SpotifyLogin, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SpotifyLogin;
function generateCodeVerifier() {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return btoa(String.fromCharCode(...array)).replace(/[^a-zA-Z0-9]/g, '');
}
async function generateCodeChallenge(verifier) {
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode(...new Uint8Array(hash))).replace(/[^a-zA-Z0-9]/g, '');
}
var _c;
__turbopack_context__.k.register(_c, "SpotifyLogin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_33cf5a91._.js.map