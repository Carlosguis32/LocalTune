(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Repositories/Melira/tauri-migration/hooks/player/use-player.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePlayer",
    ()=>usePlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/context/player/player-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/@tauri-apps/api/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function usePlayer(audioRef) {
    _s();
    const { audioQueue, currentQueuePosition, isPlaying, volume } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlayer.useEffect": ()=>{
            async function loadAudio() {
                if (!audioRef.current) return;
                if (!audioQueue || audioQueue.length === 0) return;
                if (currentQueuePosition == null || currentQueuePosition < 0 || currentQueuePosition >= audioQueue.length) return;
                const currentAudio = audioQueue[currentQueuePosition];
                if (!currentAudio.data?.path) return;
                const currentSrc = audioRef.current.getAttribute('data-path');
                if (currentSrc === currentAudio.data.path) return;
                // Convertir la ruta del archivo al formato que puede usar el elemento <audio>
                // convertFileSrc convierte "C:\path\to\file.mp3" a "https://asset.localhost/C:\path\to\file.mp3"
                const audioUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertFileSrc"])(currentAudio.data.path);
                audioRef.current.setAttribute('src', audioUrl);
                audioRef.current.setAttribute('data-path', currentAudio.data.path);
                if (isPlaying) {
                    audioRef.current.play().catch({
                        "usePlayer.useEffect.loadAudio": (e)=>console.error('Error auto-playing audio:', e)
                    }["usePlayer.useEffect.loadAudio"]);
                }
            }
            loadAudio();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["usePlayer.useEffect"], [
        audioQueue,
        currentQueuePosition,
        audioRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlayer.useEffect": ()=>{
            if (audioRef.current) {
                audioRef.current.volume = volume;
            }
        }
    }["usePlayer.useEffect"], [
        volume,
        audioRef
    ]);
}
_s(usePlayer, "uTLPyFfE0KxHdMgBkbVqF6WkjaU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/lib/functions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/Repositories/Melira/tauri-migration/hooks/player/use-player-controls.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePlayerControls",
    ()=>usePlayerControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/context/player/player-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/functions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function usePlayerControls(audioRef) {
    _s();
    const { audioQueue, currentQueuePosition, repeatMode, isInShuffleMode, setAudioQueue, setCurrentQueuePosition, setRepeatMode, setIsInShuffleMode, setIsPlaying, setCurrentTime, setVolume } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"])();
    const originalQueueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    function handlePlayPause() {
        if (audioRef?.current) {
            if (!audioRef.current.paused) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    }
    function handleNextAudio() {
        if (!audioQueue) return;
        if (audioQueue.length - 1 > currentQueuePosition) {
            setCurrentQueuePosition(currentQueuePosition + 1);
            setIsPlaying(true);
        } else if (repeatMode === 'all') {
            setCurrentQueuePosition(0);
            setIsPlaying(true);
        }
    }
    function handlePreviousAudio() {
        if (!audioQueue) return;
        if (currentQueuePosition > 0) {
            setCurrentQueuePosition(currentQueuePosition - 1);
            setIsPlaying(true);
        } else if (repeatMode === 'all') {
            setCurrentQueuePosition(audioQueue.length - 1);
            setIsPlaying(true);
        }
    }
    async function handleShuffle() {
        if (!isInShuffleMode) {
            originalQueueRef.current = audioQueue ? [
                ...audioQueue
            ] : null;
            if (audioQueue && audioQueue.length > 1) {
                const currentAudio = audioQueue[currentQueuePosition];
                const restQueue = audioQueue.filter((_, idx)=>idx !== currentQueuePosition);
                const shuffledRest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shuffleAudioQueue"])(restQueue);
                const newQueue = [
                    currentAudio,
                    ...shuffledRest
                ];
                setAudioQueue(newQueue);
                setCurrentQueuePosition(0);
            }
        } else {
            if (originalQueueRef.current) {
                const currentAudio = audioQueue?.[currentQueuePosition];
                setAudioQueue(originalQueueRef.current);
                const idx = originalQueueRef.current.findIndex((item)=>item === currentAudio);
                setCurrentQueuePosition(idx >= 0 ? idx : 0);
                originalQueueRef.current = null;
            }
        }
        setIsInShuffleMode(!isInShuffleMode);
    }
    function handleRepeat() {
        if (repeatMode === 'off') setRepeatMode('all');
        else if (repeatMode === 'all') setRepeatMode('one');
        else setRepeatMode('off');
    }
    function handleSongEnd() {
        if (repeatMode === 'one') {
            if (audioRef?.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play().catch((e)=>console.error('Error playing audio:', e));
            }
        } else {
            handleNextAudio();
            setIsPlaying(true);
        }
    }
    function handleSliderSeek(value) {
        if (audioRef?.current) {
            audioRef.current.currentTime = value;
            setCurrentTime(value);
        }
    }
    function handleVolumeChange(value) {
        setVolume(value);
        if (audioRef?.current) {
            audioRef.current.volume = value;
        }
    }
    return {
        handlePlayPause,
        handleNextAudio,
        handlePreviousAudio,
        handleShuffle,
        handleRepeat,
        handleSongEnd,
        handleSliderSeek,
        handleVolumeChange
    };
}
_s(usePlayerControls, "jN5anjWOtJmXAWcSkLpDMK0wWd8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/player/player-controllers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayerControllers",
    ()=>PlayerControllers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$hooks$2f$player$2f$use$2d$player$2d$controls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/hooks/player/use-player-controls.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/repeat.js [app-client] (ecmascript) <export default as Repeat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2d$1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat1$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/repeat-1.js [app-client] (ecmascript) <export default as Repeat1>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/shuffle.js [app-client] (ecmascript) <export default as Shuffle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript) <export default as SkipBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function PlayerControllers({ isPlaying, isInShuffleMode, repeatMode, audioRef }) {
    _s();
    const { handlePlayPause, handleNextAudio, handlePreviousAudio, handleRepeat, handleShuffle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$hooks$2f$player$2f$use$2d$player$2d$controls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerControls"])(audioRef);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: handleShuffle,
                variant: isInShuffleMode ? 'ghost' : 'default',
                size: "icon",
                className: "w-8 h-8 rounded-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__["Shuffle"], {
                    className: "text-foreground",
                    strokeWidth: 3
                }, void 0, false, {
                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/player-controllers.tsx",
                    lineNumber: 18,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/player-controllers.tsx",
                lineNumber: 12,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: handlePreviousAudio,
                variant: "ghost",
                size: "icon",
                className: "w-8 h-8 rounded-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                    className: "text-foreground fill-foreground",
                    strokeWidth: 3
                }, void 0, false, {
                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/player-controllers.tsx",
                    lineNumber: 22,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/player-controllers.tsx",
                lineNumber: 21,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: handlePlayPause,
                variant: "default",
                size: "icon",
                className: "w-10 h-10 rounded-full",
                children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                    className: "text-foreground fill-foreground"
                }, void 0, false, {
                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/player-controllers.tsx",
                    lineNumber: 27,
                    columnNumber: 6
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                    className: "w-6 h-6 text-foreground fill-foreground",
                    strokeWidth: 3
                }, void 0, false, {
                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/player-controllers.tsx",
                    lineNumber: 29,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/player-controllers.tsx",
                lineNumber: 25,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: handleNextAudio,
                variant: "ghost",
                size: "icon",
                className: "w-8 h-8 rounded-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                    className: "text-foreground fill-foreground",
                    strokeWidth: 3
                }, void 0, false, {
                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/player-controllers.tsx",
                    lineNumber: 34,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/player-controllers.tsx",
                lineNumber: 33,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: handleRepeat,
                variant: repeatMode === 'all' || repeatMode === 'one' ? 'default' : 'ghost',
                size: "icon",
                className: "w-8 h-8 rounded-full",
                children: [
                    (repeatMode === 'all' || repeatMode === 'off') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__["Repeat"], {
                        className: "text-foreground",
                        strokeWidth: 3
                    }, void 0, false, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/player-controllers.tsx",
                        lineNumber: 44,
                        columnNumber: 6
                    }, this),
                    repeatMode === 'one' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2d$1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat1$3e$__["Repeat1"], {
                        className: "text-foreground",
                        strokeWidth: 3
                    }, void 0, false, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/player-controllers.tsx",
                        lineNumber: 46,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/player-controllers.tsx",
                lineNumber: 37,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/player-controllers.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, this);
}
_s(PlayerControllers, "wvgbxSfo0YwJbmMgt914/K6OABY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$hooks$2f$player$2f$use$2d$player$2d$controls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerControls"]
    ];
});
_c = PlayerControllers;
var _c;
__turbopack_context__.k.register(_c, "PlayerControllers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/ui/slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slider",
    ()=>Slider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/@radix-ui/react-slider/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }) {
    _s();
    const _values = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Slider.useMemo[_values]": ()=>Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [
                min,
                max
            ]
    }["Slider.useMemo[_values]"], [
        value,
        defaultValue,
        min,
        max
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "slider",
        defaultValue: defaultValue,
        value: value,
        min: min,
        max: max,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col', className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"], {
                "data-slot": "slider-track",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"], {
                    "data-slot": "slider-range",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-accent absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full')
                }, void 0, false, {
                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/slider.tsx",
                    lineNumber: 40,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/slider.tsx",
                lineNumber: 34,
                columnNumber: 4
            }, this),
            Array.from({
                length: _values.length
            }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
                    "data-slot": "slider-thumb",
                    className: "bg-foreground ring-ring/50 block size-3 shrink-0 rounded-full shadow-sm transition-[color,box-shadow] cursor-pointer hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
                }, index, false, {
                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/slider.tsx",
                    lineNumber: 48,
                    columnNumber: 5
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/slider.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, this);
}
_s(Slider, "g0y/PG/feYg861SE8jxuAUMRVc0=");
_c = Slider;
;
var _c;
__turbopack_context__.k.register(_c, "Slider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/player/song-slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SliderComponent",
    ()=>SliderComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/slider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function SliderComponent({ currentTime, duration, onSeek }) {
    _s();
    const [dragValue, setDragValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
        className: "SliderRoot",
        value: [
            dragValue !== null ? dragValue : currentTime
        ],
        max: duration,
        step: 1,
        onValueChange: (value)=>{
            setDragValue(value[0]);
        },
        onValueCommit: (value)=>{
            setDragValue(null);
            onSeek(value[0]);
        }
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/song-slider.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this);
}
_s(SliderComponent, "VTeBXzM5FxSN3OMFEC2VCR8ZFr8=");
_c = SliderComponent;
var _c;
__turbopack_context__.k.register(_c, "SliderComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/player/volume-slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VolumeSlider",
    ()=>VolumeSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/slider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function VolumeSlider({ volume, onVolumeChange }) {
    _s();
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragValue, setDragValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(volume);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
        className: "w-20",
        value: [
            isDragging ? dragValue : volume
        ],
        max: 1,
        min: 0,
        step: 0.01,
        onValueChange: (value)=>{
            const newVolume = value[0];
            setDragValue(newVolume);
            onVolumeChange(newVolume);
        },
        onPointerDown: ()=>setIsDragging(true),
        onPointerUp: ()=>{
            setIsDragging(false);
        }
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/volume-slider.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, this);
}
_s(VolumeSlider, "58OxPfGB8+FQH35wDYFKisBzCjs=");
_c = VolumeSlider;
var _c;
__turbopack_context__.k.register(_c, "VolumeSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HorizontalFullPlayer",
    ()=>HorizontalFullPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/context/player/player-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$hooks$2f$player$2f$use$2d$player$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/hooks/player/use-player.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$hooks$2f$player$2f$use$2d$player$2d$controls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/hooks/player/use-player-controls.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/functions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListMusic$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/list-music.js [app-client] (ecmascript) <export default as ListMusic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$player$2f$player$2d$controllers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/player/player-controllers.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$player$2f$song$2d$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/player/song-slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$player$2f$volume$2d$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/player/volume-slider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
function HorizontalFullPlayer() {
    _s();
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { audioQueue, currentQueuePosition, repeatMode, isInShuffleMode, isPlaying, currentTime, duration, volume, isQueueOpen, setIsPlaying, setCurrentTime, setDuration, setIsQueueOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"])();
    const { handleSongEnd, handleSliderSeek, handleVolumeChange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$hooks$2f$player$2f$use$2d$player$2d$controls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerControls"])(audioRef);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$hooks$2f$player$2f$use$2d$player$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"])(audioRef);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HorizontalFullPlayer.useEffect": ()=>{
            const audio = audioRef.current;
            if (!audio) return;
            const handleTimeUpdate = {
                "HorizontalFullPlayer.useEffect.handleTimeUpdate": ()=>setCurrentTime(audio.currentTime)
            }["HorizontalFullPlayer.useEffect.handleTimeUpdate"];
            const handleLoadedMetadata = {
                "HorizontalFullPlayer.useEffect.handleLoadedMetadata": ()=>setDuration(audio.duration)
            }["HorizontalFullPlayer.useEffect.handleLoadedMetadata"];
            const handlePlay = {
                "HorizontalFullPlayer.useEffect.handlePlay": ()=>setIsPlaying(true)
            }["HorizontalFullPlayer.useEffect.handlePlay"];
            const handlePause = {
                "HorizontalFullPlayer.useEffect.handlePause": ()=>setIsPlaying(false)
            }["HorizontalFullPlayer.useEffect.handlePause"];
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('loadedmetadata', handleLoadedMetadata);
            audio.addEventListener('play', handlePlay);
            audio.addEventListener('pause', handlePause);
            return ({
                "HorizontalFullPlayer.useEffect": ()=>{
                    audio.removeEventListener('timeupdate', handleTimeUpdate);
                    audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
                    audio.removeEventListener('play', handlePlay);
                    audio.removeEventListener('pause', handlePause);
                }
            })["HorizontalFullPlayer.useEffect"];
        }
    }["HorizontalFullPlayer.useEffect"], [
        setCurrentTime,
        setDuration,
        setIsPlaying
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "fixed bottom-0 left-0 w-full h-24 bg-black border-t border-border z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                onEnded: handleSongEnd,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                lineNumber: 59,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row items-center justify-between w-full h-full mx-auto px-6 py-3 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center min-w-0 gap-4 w-1/3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: '/placeholder.webp',
                                alt: "Album Cover",
                                width: 56,
                                height: 56,
                                className: "rounded object-cover aspect-square"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                                lineNumber: 62,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H5"], {
                                        children: audioQueue[currentQueuePosition]?.data?.title || audioQueue[currentQueuePosition]?.data?.path?.split('\\').pop() || 'Unknown'
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                                        lineNumber: 71,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Small"], {
                                        children: audioQueue[currentQueuePosition]?.data?.artist || 'Unknown Artist'
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                                        lineNumber: 76,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Small"], {
                                        children: audioQueue[currentQueuePosition]?.data?.album || 'Unknown Album'
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                                        lineNumber: 77,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                                lineNumber: 70,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                        lineNumber: 61,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center w-1/3 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center mb-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$player$2f$player$2d$controllers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayerControllers"], {
                                    isPlaying: isPlaying,
                                    isInShuffleMode: isInShuffleMode,
                                    repeatMode: repeatMode,
                                    audioRef: audioRef
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                                    lineNumber: 83,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                                lineNumber: 82,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center w-full gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Small"], {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMinutesFormatted"])(currentTime)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                                        lineNumber: 91,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$player$2f$song$2d$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliderComponent"], {
                                        currentTime: currentTime,
                                        duration: duration,
                                        onSeek: handleSliderSeek
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                                        lineNumber: 92,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Small"], {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMinutesFormatted"])(duration)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                                        lineNumber: 93,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                                lineNumber: 90,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                        lineNumber: 81,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-end w-1/3 min-w-0 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: ()=>setIsQueueOpen(!isQueueOpen),
                                className: `${isQueueOpen && 'bg-accent'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListMusic$3e$__["ListMusic"], {
                                    className: "text-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                                    lineNumber: 104,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                                lineNumber: 98,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                                lineNumber: 106,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$player$2f$volume$2d$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeSlider"], {
                                volume: volume,
                                onVolumeChange: handleVolumeChange
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                                lineNumber: 107,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                        lineNumber: 97,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
                lineNumber: 60,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, this);
}
_s(HorizontalFullPlayer, "P48vf6tUImIeSX0cWPExt1mn2XY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$hooks$2f$player$2f$use$2d$player$2d$controls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerControls"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$hooks$2f$player$2f$use$2d$player$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayer"]
    ];
});
_c = HorizontalFullPlayer;
var _c;
__turbopack_context__.k.register(_c, "HorizontalFullPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Documents_Repositories_Melira_tauri-migration_3d97adcc._.js.map