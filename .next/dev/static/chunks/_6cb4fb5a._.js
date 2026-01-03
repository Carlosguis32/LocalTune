(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/functions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertDataStreamToImage",
    ()=>convertDataStreamToImage,
    "formatDuration",
    ()=>formatDuration,
    "secondsToMinutesFormatted",
    ()=>secondsToMinutesFormatted,
    "shuffleArray",
    ()=>shuffleArray,
    "shuffleAudioQueue",
    ()=>shuffleAudioQueue
]);
function shuffleArray(array) {
    const shuffled = [
        ...array
    ];
    for(let i = 0; i < array.length; i++){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [
            shuffled[j],
            shuffled[i]
        ];
    }
    return shuffled;
}
function shuffleAudioQueue(queue) {
    return shuffleArray(queue);
}
function secondsToMinutesFormatted(value) {
    if (!value) return '0:00';
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor(value % 3600 / 60);
    const seconds = Math.floor(value % 60);
    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
function formatDuration(seconds) {
    if (!seconds) return '0 min';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    if (hours > 0) {
        return `${hours} hr ${minutes} min`;
    }
    return `${minutes} min`;
}
function convertDataStreamToImage(stream) {
    const byteArray = stream.split(',').map((num)=>parseInt(num.trim()));
    const uint8Array = new Uint8Array(byteArray);
    const blob = new Blob([
        uint8Array
    ], {
        type: 'image/jpeg'
    });
    const image = URL.createObjectURL(blob);
    return image;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/audio/audio-full-width-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioFullWidthCard",
    ()=>AudioFullWidthCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/player/player-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$image$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/image/image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/typography.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/functions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function AudioFullWidthCard(props) {
    _s();
    const { className, audio, audioIndex, onClick, isActive } = props;
    const { currentQueuePosition, isPlaying, audioQueue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"])();
    const isCurrentSong = audioIndex === currentQueuePosition && audioQueue.length > 0;
    const isPlayingThis = isCurrentSong && isPlaying;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group grid grid-cols-[50px_4fr_3fr_minmax(120px,1fr)] gap-3 p-2 rounded-md cursor-pointer hover:bg-muted-secondary transition-all duration-200 items-center', isCurrentSong && 'bg-muted-secondary', className),
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm font-medium group-hover:hidden', isCurrentSong && 'text-primary-custom'),
                        children: audioIndex + 1
                    }, void 0, false, {
                        fileName: "[project]/components/audio/audio-full-width-card.tsx",
                        lineNumber: 37,
                        columnNumber: 5
                    }, this),
                    isPlayingThis ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                        className: "size-4 text-foreground hidden group-hover:block"
                    }, void 0, false, {
                        fileName: "[project]/components/audio/audio-full-width-card.tsx",
                        lineNumber: 46,
                        columnNumber: 6
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                        className: "size-4 text-foreground hidden group-hover:block fill-current"
                    }, void 0, false, {
                        fileName: "[project]/components/audio/audio-full-width-card.tsx",
                        lineNumber: 48,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/audio/audio-full-width-card.tsx",
                lineNumber: 36,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$image$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                        className: "aspect-square object-cover rounded-sm w-10 h-10 shrink-0",
                        src: '',
                        alt: 'Album cover',
                        width: 40,
                        height: 40
                    }, void 0, false, {
                        fileName: "[project]/components/audio/audio-full-width-card.tsx",
                        lineNumber: 54,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex flex-col justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('truncate', isCurrentSong && 'text-primary-custom'),
                            children: audio.title || audio.path?.split('\\').pop() || 'Unknown'
                        }, void 0, false, {
                            fileName: "[project]/components/audio/audio-full-width-card.tsx",
                            lineNumber: 62,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/audio/audio-full-width-card.tsx",
                        lineNumber: 61,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/audio/audio-full-width-card.tsx",
                lineNumber: 53,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 hidden sm:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Small"], {
                    className: "truncate text-muted-foreground hover:text-foreground hover:underline",
                    children: audio.artist || 'Unknown Artist'
                }, void 0, false, {
                    fileName: "[project]/components/audio/audio-full-width-card.tsx",
                    lineNumber: 70,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/audio/audio-full-width-card.tsx",
                lineNumber: 69,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 hidden md:flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Small"], {
                    className: "text-muted-foreground",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMinutesFormatted"])(audio.duration || 0)
                }, void 0, false, {
                    fileName: "[project]/components/audio/audio-full-width-card.tsx",
                    lineNumber: 77,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/audio/audio-full-width-card.tsx",
                lineNumber: 76,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/audio/audio-full-width-card.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this);
}
_s(AudioFullWidthCard, "tG7Rj+JNmftOGmEb0lcHvOGK5mc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"]
    ];
});
_c = AudioFullWidthCard;
var _c;
__turbopack_context__.k.register(_c, "AudioFullWidthCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/playlist/[slug]/page-client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlaylistPageClient",
    ()=>PlaylistPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$audio$2f$audio$2d$full$2d$width$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/audio/audio-full-width-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$image$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/image/image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/typography.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/player/player-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/functions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function PlaylistPageClient({ playlistId, tracks }) {
    _s();
    const { setAudioQueue, setCurrentQueuePosition, setIsPlaying } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"])();
    // Obtener información de la primera canción para la imagen del álbum
    const firstTrack = tracks[0]?.track;
    const playlistImage = firstTrack?.album?.images?.[0]?.url || '';
    // Calcular duración total
    const totalDuration = tracks.reduce((acc, item)=>acc + (item.track?.duration_ms || 0), 0) / 1000;
    // Convertir tracks de Spotify a formato AudioFile para el reproductor
    // NOTA: Solo se pueden reproducir archivos locales. Las canciones de Spotify requieren Spotify Web Playback SDK
    const convertToAudioFiles = ()=>{
        return tracks.filter((item)=>{
            // Solo incluir tracks con URI local (tienen archivo en el sistema)
            return item.track && item.track.uri.startsWith('local:');
        }).map((item)=>({
                id: item.track.id,
                path: item.track.uri.replace('local:', ''),
                spotifyId: undefined,
                title: item.track.name,
                artist: item.track.artists?.[0]?.name || 'Unknown Artist',
                album: item.track.album?.name || 'Unknown Album',
                duration: Math.floor(item.track.duration_ms / 1000),
                created: new Date().toISOString(),
                updated: new Date().toISOString()
            }));
    };
    function handlePlayAll() {
        if (!tracks || tracks.length === 0) return;
        const audioFiles = convertToAudioFiles();
        if (audioFiles.length === 0) {
            alert('Esta playlist no contiene archivos locales que se puedan reproducir. Las canciones de Spotify requieren integración con Spotify Web Playback SDK.');
            return;
        }
        const queue = audioFiles.map((audio)=>({
                data: audio,
                ref: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"])()
            }));
        setAudioQueue(queue);
        setCurrentQueuePosition(0);
        setIsPlaying(true);
    }
    function handlePlayFromIndex(index) {
        if (!tracks || tracks.length === 0) return;
        const audioFiles = convertToAudioFiles();
        if (audioFiles.length === 0) {
            alert('Esta playlist no contiene archivos locales que se puedan reproducir. Las canciones de Spotify requieren integración con Spotify Web Playback SDK.');
            return;
        }
        const queue = audioFiles.map((audio)=>({
                data: audio,
                ref: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"])()
            }));
        setAudioQueue(queue);
        setCurrentQueuePosition(index);
        setIsPlaying(true);
    }
    // Determinar el nombre de la playlist
    const isLocalPlaylist = playlistId === 'local-files';
    const playlistName = isLocalPlaylist ? 'Archivos Locales' : 'Spotify Playlist';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-6 p-6 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$image$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                        className: "aspect-square object-cover rounded-md w-48 h-48 shrink-0 shadow-lg",
                        src: playlistImage,
                        alt: playlistName,
                        width: 200,
                        height: 200
                    }, void 0, false, {
                        fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                        lineNumber: 97,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-end gap-2 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"], {
                                className: "text-sm font-semibold",
                                children: "Playlist"
                            }, void 0, false, {
                                fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                                lineNumber: 105,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H1"], {
                                className: "text-4xl md:text-6xl font-bold truncate",
                                children: playlistName
                            }, void 0, false, {
                                fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                                lineNumber: 106,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-foreground font-semibold",
                                        children: [
                                            tracks.length,
                                            " ",
                                            tracks.length === 1 ? 'song' : 'songs'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                                        lineNumber: 108,
                                        columnNumber: 7
                                    }, this),
                                    totalDuration > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                                                lineNumber: 113,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDuration"])(totalDuration)
                                            }, void 0, false, {
                                                fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                                                lineNumber: 114,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                                lineNumber: 107,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                        lineNumber: 104,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                lineNumber: 96,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: handlePlayAll,
                    size: "lg",
                    className: "rounded-full w-14 h-14 p-0",
                    disabled: !tracks || tracks.length === 0,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                        className: "size-6 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                        lineNumber: 129,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                    lineNumber: 123,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                lineNumber: 122,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-6 pb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-[50px_4fr_3fr_minmax(120px,1fr)] gap-3 px-2 pb-2 mb-2 border-b border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground text-sm",
                                children: "#"
                            }, void 0, false, {
                                fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                                lineNumber: 137,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground text-sm",
                                children: "Title"
                            }, void 0, false, {
                                fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                                lineNumber: 138,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground text-sm hidden sm:block",
                                children: "Artist"
                            }, void 0, false, {
                                fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                                lineNumber: 139,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "justify-end hidden md:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "size-4 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                                    lineNumber: 141,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                                lineNumber: 140,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                        lineNumber: 136,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: tracks.map((item, index)=>{
                            if (!item.track) return null;
                            const track = item.track;
                            const isLocalTrack = track.uri.startsWith('local:');
                            const audioFile = {
                                id: track.id,
                                path: isLocalTrack ? track.uri.replace('local:', '') : '',
                                spotifyId: !isLocalTrack ? track.id : undefined,
                                title: track.name,
                                artist: track.artists?.[0]?.name || 'Unknown Artist',
                                album: track.album?.name || 'Unknown Album',
                                duration: Math.floor(track.duration_ms / 1000),
                                created: new Date().toISOString(),
                                updated: new Date().toISOString()
                            };
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$audio$2f$audio$2d$full$2d$width$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioFullWidthCard"], {
                                audio: audioFile,
                                audioIndex: index,
                                onClick: ()=>{
                                    // Solo permitir reproducir archivos locales
                                    if (isLocalTrack) {
                                        handlePlayFromIndex(index);
                                    } else {
                                        console.warn('Spotify tracks cannot be played locally. Spotify Web Playback SDK integration required.');
                                    }
                                }
                            }, `${track.id}-${index}`, false, {
                                fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                                lineNumber: 166,
                                columnNumber: 8
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                        lineNumber: 146,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/playlist/[slug]/page-client.tsx",
                lineNumber: 134,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/playlist/[slug]/page-client.tsx",
        lineNumber: 94,
        columnNumber: 3
    }, this);
}
_s(PlaylistPageClient, "KELo79uIsnZ7a3kGpk43IhUkO/U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"]
    ];
});
_c = PlaylistPageClient;
var _c;
__turbopack_context__.k.register(_c, "PlaylistPageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/audioPath.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteAudioPath",
    ()=>deleteAudioPath,
    "getAllLocalAudioFiles",
    ()=>getAllLocalAudioFiles,
    "getAudioPaths",
    ()=>getAudioPaths,
    "saveAudioPath",
    ()=>saveAudioPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tauri-apps/api/core.js [app-client] (ecmascript)");
;
async function getAudioPaths() {
    try {
        const paths = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invoke"])('get_audio_paths');
        return paths;
    } catch (error) {
        console.error('Error fetching audio paths:', error);
        return [];
    }
}
async function saveAudioPath(path) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invoke"])('save_audio_path', {
            path
        });
    } catch (error) {
        console.error('Error saving audio path:', error);
        throw error;
    }
}
async function deleteAudioPath(path) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invoke"])('delete_audio_path', {
            path
        });
    } catch (error) {
        console.error('Error deleting audio path:', error);
        throw error;
    }
}
async function getAllLocalAudioFiles() {
    try {
        const files = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invoke"])('get_all_local_audio_files');
        return files;
    } catch (error) {
        console.error('Error fetching local audio files:', error);
        return [];
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/playlist/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Playlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$playlist$2f5b$slug$5d2f$page$2d$client$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/playlist/[slug]/page-client.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$spotify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/spotify.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$audioPath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/audioPath.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/typography.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$spotify$2f$spotify$2d$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/spotify/spotify-auth-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function Playlist({ params }) {
    _s();
    const [tracks, setTracks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [slug, setSlug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { isAuthenticated, login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$spotify$2f$spotify$2d$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpotifyAuth"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Playlist.useEffect": ()=>{
            async function unwrapParams() {
                const resolvedParams = await params;
                setSlug(resolvedParams.slug);
            }
            unwrapParams();
        }
    }["Playlist.useEffect"], [
        params
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Playlist.useEffect": ()=>{
            async function fetchPlaylistTracks() {
                if (!slug) {
                    setIsLoading(false);
                    return;
                }
                try {
                    setIsLoading(true);
                    setError(null);
                    // Si es la playlist de archivos locales
                    if (slug === 'local-files') {
                        const localFiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$audioPath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllLocalAudioFiles"])();
                        // Convertir AudioFile[] a SpotifyPlaylistTrack[]
                        const localTracks = localFiles.map({
                            "Playlist.useEffect.fetchPlaylistTracks.localTracks": (file)=>({
                                    track: {
                                        id: file.path,
                                        name: file.title || file.path.split('\\').pop() || 'Unknown',
                                        artists: file.artist ? [
                                            {
                                                id: '',
                                                name: file.artist
                                            }
                                        ] : [
                                            {
                                                id: '',
                                                name: 'Unknown Artist'
                                            }
                                        ],
                                        album: {
                                            id: '',
                                            name: file.album || 'Unknown Album',
                                            images: []
                                        },
                                        duration_ms: file.duration || 0,
                                        uri: `local:${file.path}`,
                                        external_urls: {
                                            spotify: ''
                                        }
                                    },
                                    added_at: ''
                                })
                        }["Playlist.useEffect.fetchPlaylistTracks.localTracks"]);
                        setTracks(localTracks);
                    } else {
                        // Es una playlist de Spotify
                        if (!isAuthenticated) {
                            setIsLoading(false);
                            return;
                        }
                        const playlistTracks = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$spotify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpotifyPlaylistTracks"])(slug);
                        setTracks(playlistTracks);
                    }
                } catch (error) {
                    console.error('Error loading playlist tracks:', error);
                    // Check if it's an auth error
                    if (error?.toString().includes('No hay sesión activa') || error?.toString().includes('session')) {
                        setError('Your Spotify session has expired. Please login again.');
                    } else {
                        setError(error instanceof Error ? error.message : 'Failed to load playlist tracks');
                    }
                } finally{
                    setIsLoading(false);
                }
            }
            fetchPlaylistTracks();
        }
    }["Playlist.useEffect"], [
        slug,
        isAuthenticated
    ]);
    // Solo mostrar prompt de autenticación si NO es la playlist local y NO está autenticado
    if (slug !== 'local-files' && !isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center p-6 w-full h-full gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "size-16 text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/app/playlist/[slug]/page.tsx",
                    lineNumber: 94,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H1"], {
                    children: "Connect to Spotify"
                }, void 0, false, {
                    fileName: "[project]/app/playlist/[slug]/page.tsx",
                    lineNumber: 95,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"], {
                    className: "text-muted-foreground text-center max-w-md",
                    children: "You need to connect your Spotify account to view this playlist."
                }, void 0, false, {
                    fileName: "[project]/app/playlist/[slug]/page.tsx",
                    lineNumber: 96,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: login,
                    size: "lg",
                    children: "Login to Spotify"
                }, void 0, false, {
                    fileName: "[project]/app/playlist/[slug]/page.tsx",
                    lineNumber: 99,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/playlist/[slug]/page.tsx",
            lineNumber: 93,
            columnNumber: 4
        }, this);
    }
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center p-6 w-full h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"], {
                className: "text-muted-foreground",
                children: "Loading playlist..."
            }, void 0, false, {
                fileName: "[project]/app/playlist/[slug]/page.tsx",
                lineNumber: 109,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/playlist/[slug]/page.tsx",
            lineNumber: 108,
            columnNumber: 4
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center p-6 w-full h-full gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "size-16 text-destructive"
                }, void 0, false, {
                    fileName: "[project]/app/playlist/[slug]/page.tsx",
                    lineNumber: 117,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"], {
                    className: "text-muted-foreground text-center max-w-md",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/app/playlist/[slug]/page.tsx",
                    lineNumber: 118,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: error.includes('session') || error.includes('expired') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: login,
                        children: "Login Again"
                    }, void 0, false, {
                        fileName: "[project]/app/playlist/[slug]/page.tsx",
                        lineNumber: 121,
                        columnNumber: 7
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>window.location.reload(),
                        children: "Try Again"
                    }, void 0, false, {
                        fileName: "[project]/app/playlist/[slug]/page.tsx",
                        lineNumber: 123,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/playlist/[slug]/page.tsx",
                    lineNumber: 119,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/playlist/[slug]/page.tsx",
            lineNumber: 116,
            columnNumber: 4
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$playlist$2f5b$slug$5d2f$page$2d$client$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaylistPageClient"], {
        playlistId: slug,
        tracks: tracks
    }, void 0, false, {
        fileName: "[project]/app/playlist/[slug]/page.tsx",
        lineNumber: 130,
        columnNumber: 9
    }, this);
}
_s(Playlist, "neHBRs7+10shidqNCU+F3dnQMPU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$spotify$2f$spotify$2d$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpotifyAuth"]
    ];
});
_c = Playlist;
var _c;
__turbopack_context__.k.register(_c, "Playlist");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Play
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
            key: "10ikf1"
        }
    ]
];
const Play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("play", __iconNode);
;
 //# sourceMappingURL=play.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Play",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Pause
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            x: "14",
            y: "3",
            width: "5",
            height: "18",
            rx: "1",
            key: "kaeet6"
        }
    ],
    [
        "rect",
        {
            x: "5",
            y: "3",
            width: "5",
            height: "18",
            rx: "1",
            key: "1wsw3u"
        }
    ]
];
const Pause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("pause", __iconNode);
;
 //# sourceMappingURL=pause.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pause",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleAlert
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
];
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-alert", __iconNode);
;
 //# sourceMappingURL=circle-alert.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_6cb4fb5a._.js.map