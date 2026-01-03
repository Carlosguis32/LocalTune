(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Repositories/Melira/tauri-migration/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary-custom text-primary shadow-xs',
            destructive: 'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
            ghost: '',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 9
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/ui/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function ScrollArea({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "scroll-area",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative', className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/scroll-area.tsx",
                lineNumber: 11,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/scroll-area.tsx",
                lineNumber: 17,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/scroll-area.tsx",
                lineNumber: 18,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/scroll-area.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, this);
}
_c = ScrollArea;
function ScrollBar({ className, orientation = 'vertical', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex touch-none p-px transition-colors select-none', orientation === 'vertical' && 'h-full w-3 border-l border-l-transparent', orientation === 'horizontal' && 'h-3 flex-col border-t border-t-transparent', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            "data-slot": "scroll-area-thumb",
            className: "bg-border hover:bg-accent transition-colors relative flex-1 rounded-full"
        }, void 0, false, {
            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/scroll-area.tsx",
            lineNumber: 40,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/scroll-area.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, this);
}
_c1 = ScrollBar;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrollArea");
__turbopack_context__.k.register(_c1, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/context/player/player-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayerContext",
    ()=>PlayerContext,
    "usePlayerContext",
    ()=>usePlayerContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const PlayerContextProvider = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function loadAudioQueue() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const saved = localStorage.getItem('audioQueue');
    if (!saved) return [];
    try {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed.map((item)=>({
                ...item,
                ref: {
                    current: null
                }
            })) : [];
    } catch  {
        return [];
    }
}
function loadNumber(key, defaultValue) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const saved = localStorage.getItem(key);
    return saved ? parseInt(saved, 10) : defaultValue;
}
function loadBoolean(key, defaultValue) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
}
function loadRepeatMode(key, defaultValue) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const saved = localStorage.getItem(key);
    if (!saved) return defaultValue;
    try {
        if (saved === '"off"' || saved === '"all"' || saved === '"one"') {
            return JSON.parse(saved);
        }
        return defaultValue;
    } catch  {
        return defaultValue;
    }
}
function PlayerContext({ children }) {
    _s();
    const [audioQueue, setAudioQueueState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(loadAudioQueue);
    const [currentQueuePosition, setCurrentQueuePositionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PlayerContext.useState": ()=>loadNumber('currentQueuePosition', 0)
    }["PlayerContext.useState"]);
    const [repeatMode, setRepeatModeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PlayerContext.useState": ()=>loadRepeatMode('repeatMode', 'off')
    }["PlayerContext.useState"]);
    const [isInShuffleMode, setIsInShuffleModeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PlayerContext.useState": ()=>loadBoolean('isInShuffleMode', true)
    }["PlayerContext.useState"]);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [volume, setVolumeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PlayerContext.useState": ()=>loadNumber('volume', 1)
    }["PlayerContext.useState"]);
    const [isQueueOpen, setIsQueueOpenState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PlayerContext.useState": ()=>loadBoolean('isQueueOpen', false)
    }["PlayerContext.useState"]);
    const [isPlaylistSidebarOpen, setIsPlaylistSidebarOpenState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PlayerContext.useState": ()=>loadBoolean('isPlaylistSidebarOpen', false)
    }["PlayerContext.useState"]);
    // Setters that also update localStorage
    function setAudioQueue(queue) {
        setAudioQueueState(queue);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem('audioQueue', JSON.stringify(queue.map((item)=>({
                    data: item.data
                }))));
        }
    }
    function setCurrentQueuePosition(value) {
        setCurrentQueuePositionState(value);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem('currentQueuePosition', value.toString());
        }
    }
    function setRepeatMode(value) {
        setRepeatModeState(value);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem('repeatMode', JSON.stringify(value));
        }
    }
    function setIsInShuffleMode(value) {
        setIsInShuffleModeState(value);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem('isInShuffleMode', JSON.stringify(value));
        }
    }
    function setVolume(value) {
        setVolumeState(value);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem('volume', value.toString());
        }
    }
    function setIsQueueOpen(value) {
        setIsQueueOpenState(value);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem('isQueueOpen', JSON.stringify(value));
        }
    }
    function setIsPlaylistSidebarOpen(value) {
        setIsPlaylistSidebarOpenState(value);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem('isPlaylistSidebarOpen', JSON.stringify(value));
        }
    }
    // Restore state from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerContext.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setAudioQueueState(loadAudioQueue());
            setCurrentQueuePositionState(loadNumber('currentQueuePosition', 0));
            setRepeatModeState(loadRepeatMode('repeatMode', 'off'));
            setIsInShuffleModeState(loadBoolean('isInShuffleMode', true));
            setVolumeState(loadNumber('volume', 1));
            setIsQueueOpenState(loadBoolean('isQueueOpen', false));
            setIsPlaylistSidebarOpenState(loadBoolean('isPlaylistSidebarOpen', false));
        }
    }["PlayerContext.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerContextProvider.Provider, {
        value: {
            audioQueue,
            currentQueuePosition,
            repeatMode,
            isInShuffleMode,
            isPlaying,
            currentTime,
            duration,
            volume,
            isQueueOpen,
            isPlaylistSidebarOpen,
            setAudioQueue,
            setCurrentQueuePosition,
            setRepeatMode,
            setIsInShuffleMode,
            setIsPlaying,
            setCurrentTime,
            setDuration,
            setVolume,
            setIsQueueOpen: setIsQueueOpen,
            setIsPlaylistSidebarOpen: setIsPlaylistSidebarOpen
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/context/player/player-context.tsx",
        lineNumber: 150,
        columnNumber: 3
    }, this);
}
_s(PlayerContext, "Oy7YCY8goQNfNw+defYmxdfxHII=");
_c = PlayerContext;
function usePlayerContext() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PlayerContextProvider);
    if (!context) throw new Error('usePlayerContext must be used within a PlayerContext provider');
    return context;
}
_s1(usePlayerContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "PlayerContext");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Display1",
    ()=>Display1,
    "Display2",
    ()=>Display2,
    "Display3",
    ()=>Display3,
    "H1",
    ()=>H1,
    "H2",
    ()=>H2,
    "H3",
    ()=>H3,
    "H4",
    ()=>H4,
    "H5",
    ()=>H5,
    "H6",
    ()=>H6,
    "P",
    ()=>P,
    "Small",
    ()=>Small,
    "display1Class",
    ()=>display1Class,
    "display2Class",
    ()=>display2Class,
    "display3Class",
    ()=>display3Class,
    "h1Class",
    ()=>h1Class,
    "h2Class",
    ()=>h2Class,
    "h3Class",
    ()=>h3Class,
    "h4Class",
    ()=>h4Class,
    "h5Class",
    ()=>h5Class,
    "h6Class",
    ()=>h6Class,
    "pClass",
    ()=>pClass,
    "smallClass",
    ()=>smallClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/utils.ts [app-client] (ecmascript)");
;
;
const display1Class = 'text-center text-6xl font-black text-balance text-white';
const display2Class = 'text-center text-5xl font-extrabold text-balance text-white';
const display3Class = 'text-center text-4xl font-extrabold text-balance text-white';
const h1Class = 'text-center text-3xl font-extrabold text-balance text-white';
const h2Class = 'text-2xl font-semibold tracking-tight text-white';
const h3Class = 'text-xl font-semibold tracking-tight text-white';
const h4Class = 'text-lg font-semibold tracking-tight text-white';
const h5Class = 'text-base font-semibold tracking-tight text-white';
const h6Class = 'text-sm font-semibold tracking-tight text-white';
const pClass = 'text-sm text-white';
const smallClass = 'text-xs text-muted-foreground';
function Display1({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(display1Class, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
_c = Display1;
function Display2({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(display2Class, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
_c1 = Display2;
function Display3({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(display3Class, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
_c2 = Display3;
function H1({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(h1Class, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
_c3 = H1;
function H2({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(h2Class, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, this);
}
_c4 = H2;
function H3({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(h3Class, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
_c5 = H3;
function H4({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(h4Class, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, this);
}
_c6 = H4;
function H5({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(h5Class, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
_c7 = H5;
function H6({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(h6Class, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 54,
        columnNumber: 9
    }, this);
}
_c8 = H6;
function P({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(pClass, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, this);
}
_c9 = P;
function Small({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(smallClass, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, this);
}
_c10 = Small;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "Display1");
__turbopack_context__.k.register(_c1, "Display2");
__turbopack_context__.k.register(_c2, "Display3");
__turbopack_context__.k.register(_c3, "H1");
__turbopack_context__.k.register(_c4, "H2");
__turbopack_context__.k.register(_c5, "H3");
__turbopack_context__.k.register(_c6, "H4");
__turbopack_context__.k.register(_c7, "H5");
__turbopack_context__.k.register(_c8, "H6");
__turbopack_context__.k.register(_c9, "P");
__turbopack_context__.k.register(_c10, "Small");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/image/image.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Image",
    ()=>Image
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/image.js [app-client] (ecmascript)");
;
;
const PLACEHOLDER_SRC = '/placeholder.webp';
function Image({ src, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: src || PLACEHOLDER_SRC,
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/image/image.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
_c = Image;
var _c;
__turbopack_context__.k.register(_c, "Image");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-small-horizontal-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioSmallHorizontalCard",
    ()=>AudioSmallHorizontalCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/context/player/player-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$image$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/image/image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function AudioSmallHorizontalCard(props) {
    _s();
    const { className, audio, audioIndex, handleAudioClick, handleRemoveAudioButtonClick } = props;
    const { currentQueuePosition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group grid gap-2 p-1 rounded-md cursor-pointer hover:bg-muted-secondary transition-all items-center', audioIndex !== currentQueuePosition ? 'grid-cols-[50px_1fr_auto]' : 'grid-cols-[50px_1fr]', className),
        onClick: ()=>handleAudioClick(audioIndex),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$image$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                className: "aspect-square object-cover rounded-sm w-[45px] h-[45px]",
                src: '',
                alt: 'Playlist image',
                width: 45,
                height: 45
            }, void 0, false, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-small-horizontal-card.tsx",
                lineNumber: 31,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"], {
                        className: `${audioIndex === currentQueuePosition && 'text-primary-custom'} truncate`,
                        children: audio.data.title || audio.data.path?.split('\\').pop() || 'Unknown'
                    }, void 0, false, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-small-horizontal-card.tsx",
                        lineNumber: 40,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Small"], {
                        className: "truncate",
                        children: audio.data.artist || 'Unknown Artist'
                    }, void 0, false, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-small-horizontal-card.tsx",
                        lineNumber: 43,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-small-horizontal-card.tsx",
                lineNumber: 39,
                columnNumber: 4
            }, this),
            audioIndex !== currentQueuePosition && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                size: "icon",
                className: "w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity",
                onClick: (e)=>{
                    handleRemoveAudioButtonClick(e, audioIndex);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-small-horizontal-card.tsx",
                    lineNumber: 55,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-small-horizontal-card.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, this)
        ]
    }, audio.data.id, true, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-small-horizontal-card.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, this);
}
_s(AudioSmallHorizontalCard, "UcfLIfOWDfoJ5c89O+yojtQiet8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"]
    ];
});
_c = AudioSmallHorizontalCard;
var _c;
__turbopack_context__.k.register(_c, "AudioSmallHorizontalCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioQueue",
    ()=>AudioQueue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/context/player/player-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListMusic$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/list-music.js [app-client] (ecmascript) <export default as ListMusic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$audio$2f$audio$2d$small$2d$horizontal$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-small-horizontal-card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function AudioQueue({ isOpen, onClose }) {
    _s();
    const { audioQueue, currentQueuePosition, setCurrentQueuePosition, setAudioQueue, setIsPlaying } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"])();
    function handleAudioClick(index) {
        setCurrentQueuePosition(index);
        setIsPlaying(true);
    }
    function handleRemoveAudioButtonClick(e, index) {
        e.stopPropagation();
        removeFromQueue(index);
    }
    const removeFromQueue = (index)=>{
        const newQueue = audioQueue.filter((_, i)=>i !== index);
        setAudioQueue(newQueue);
        if (index < currentQueuePosition) {
            setCurrentQueuePosition(currentQueuePosition - 1);
        } else if (index === currentQueuePosition && newQueue.length > 0) {} else if (index === currentQueuePosition && newQueue.length === 0) {
            setCurrentQueuePosition(0);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `pt-16 h-[calc(100vh-4rem)] bg-background border-l border-border flex flex-col transition-all ease-in-out overflow-hidden ${isOpen ? 'w-80' : 'w-0'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-2 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H4"], {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListMusic$3e$__["ListMusic"], {}, void 0, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx",
                                lineNumber: 48,
                                columnNumber: 6
                            }, this),
                            "Queue"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx",
                        lineNumber: 47,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        onClick: onClose,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx",
                            lineNumber: 52,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx",
                        lineNumber: 51,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx",
                lineNumber: 46,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                className: "flex-1",
                children: audioQueue.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center py-8 text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                            className: "w-8 h-8 mb-2"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx",
                            lineNumber: 59,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"], {
                            children: "No audio/songs in queue"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx",
                            lineNumber: 60,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx",
                    lineNumber: 58,
                    columnNumber: 6
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H4"], {
                            className: "py-2 pb-1 px-4",
                            children: "Now playing:"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx",
                            lineNumber: 64,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 pt-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$audio$2f$audio$2d$small$2d$horizontal$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioSmallHorizontalCard"], {
                                audio: audioQueue[currentQueuePosition],
                                audioIndex: currentQueuePosition,
                                handleAudioClick: handleAudioClick,
                                handleRemoveAudioButtonClick: handleRemoveAudioButtonClick
                            }, audioQueue[currentQueuePosition].data.id, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx",
                                lineNumber: 66,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx",
                            lineNumber: 65,
                            columnNumber: 7
                        }, this),
                        currentQueuePosition < audioQueue.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H4"], {
                                    className: "py-2 pb-1 px-4",
                                    children: "Next on queue:"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx",
                                    lineNumber: 77,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 pt-0 space-y-1",
                                    children: audioQueue.slice(currentQueuePosition + 1).map((audio, relativeIndex)=>{
                                        const index = currentQueuePosition + 1 + relativeIndex;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$audio$2f$audio$2d$small$2d$horizontal$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioSmallHorizontalCard"], {
                                            audio: audio,
                                            audioIndex: index,
                                            handleAudioClick: handleAudioClick,
                                            handleRemoveAudioButtonClick: handleRemoveAudioButtonClick
                                        }, audio.data.id, false, {
                                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx",
                                            lineNumber: 84,
                                            columnNumber: 13
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx",
                                    lineNumber: 78,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx",
                lineNumber: 56,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx",
        lineNumber: 41,
        columnNumber: 3
    }, this);
}
_s(AudioQueue, "p92GhAHDV7NVgH3PWlvd1fjX6Rc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"]
    ];
});
_c = AudioQueue;
var _c;
__turbopack_context__.k.register(_c, "AudioQueue");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-accent focus-visible:transition', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/search/search-bar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchBar",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function SearchBar({ placeholder = 'Play something...', onSearch }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleInputChange = (e)=>{
        setQuery(e.target.value);
        if (onSearch) {
            onSearch(e.target.value);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-md mx-auto relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/search/search-bar.tsx",
                    lineNumber: 23,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/search/search-bar.tsx",
                lineNumber: 22,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "text",
                value: query,
                onChange: handleInputChange,
                placeholder: placeholder,
                className: "pl-10 py-2"
            }, void 0, false, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/search/search-bar.tsx",
                lineNumber: 26,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/search/search-bar.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, this);
}
_s(SearchBar, "qO/HZodsWTfJhuzZtdaxiosei2U=");
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/context/player/player-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/library.js [app-client] (ecmascript) <export default as Library>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$search$2f$search$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/search/search-bar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function Header() {
    _s();
    const { isPlaylistSidebarOpen, setIsPlaylistSidebarOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-background border-b border-border h-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex items-center justify-between px-6 py-3 h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/melira-logo.svg",
                                alt: "Melira Logo",
                                width: 24,
                                height: 24,
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx",
                                lineNumber: 16,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-semibold",
                                children: "Melira"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx",
                                lineNumber: 17,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx",
                        lineNumber: 15,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx",
                    lineNumber: 14,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            onClick: ()=>setIsPlaylistSidebarOpen(!isPlaylistSidebarOpen),
                            className: `${isPlaylistSidebarOpen && 'bg-accent'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__["Library"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx",
                                lineNumber: 28,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx",
                            lineNumber: 22,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$search$2f$search$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchBar"], {}, void 0, false, {
                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx",
                            lineNumber: 31,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {}, void 0, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx",
                                lineNumber: 36,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx",
                            lineNumber: 35,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: '/settings',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {}, void 0, false, {
                                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx",
                                    lineNumber: 40,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx",
                                lineNumber: 39,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx",
                            lineNumber: 38,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx",
                    lineNumber: 34,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx",
            lineNumber: 13,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this);
}
_s(Header, "GPdpAT5+t2olcqzVeqN+dRaRIss=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8090");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/lib/api/playlist.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllPlaylists",
    ()=>getAllPlaylists,
    "getPlaylistById",
    ()=>getPlaylistById
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/constants.ts [app-client] (ecmascript)");
;
async function getAllPlaylists() {
    const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/v1/playlists`);
    if (!response.ok) {
        throw new Error(`Failed to fetch playlists: ${response.statusText}`);
    }
    return response.json();
}
async function getPlaylistById(playlistId) {
    const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/v1/playlist/${playlistId}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch playlist: ${response.statusText}`);
    }
    const data = await response.json();
    return {
        ...data.playlist,
        audioFiles: data.audioFiles
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-small-horizontal-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlaylistSmallHorizontalCard",
    ()=>PlaylistSmallHorizontalCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$image$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/image/image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx [app-client] (ecmascript)");
;
;
;
;
function PlaylistSmallHorizontalCard(props) {
    const { playlist, handlePlaylistClick } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group grid grid-cols-[50px_1fr] gap-2 p-1.5 rounded-md cursor-pointer hover:bg-muted-secondary transition-all items-center'),
        onClick: ()=>handlePlaylistClick(playlist),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$image$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                className: "aspect-square object-cover rounded-sm w-[50px] h-[50px]",
                src: '',
                alt: 'Playlist image',
                width: 50,
                height: 50
            }, void 0, false, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-small-horizontal-card.tsx",
                lineNumber: 22,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"], {
                        className: "truncate",
                        children: playlist.name || 'Unnamed Playlist'
                    }, void 0, false, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-small-horizontal-card.tsx",
                        lineNumber: 30,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Small"], {
                        className: "truncate",
                        children: [
                            playlist.audioFiles?.length || 0,
                            " songs"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-small-horizontal-card.tsx",
                        lineNumber: 31,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-small-horizontal-card.tsx",
                lineNumber: 29,
                columnNumber: 4
            }, this)
        ]
    }, playlist.id, true, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-small-horizontal-card.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this);
}
_c = PlaylistSmallHorizontalCard;
var _c;
__turbopack_context__.k.register(_c, "PlaylistSmallHorizontalCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlaylistSidebar",
    ()=>PlaylistSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$api$2f$playlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/api/playlist.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/library.js [app-client] (ecmascript) <export default as Library>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListMusic$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/list-music.js [app-client] (ecmascript) <export default as ListMusic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$playlist$2f$playlist$2d$small$2d$horizontal$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-small-horizontal-card.tsx [app-client] (ecmascript)");
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
function PlaylistSidebar({ isOpen, onClose, onPlaylistSelect }) {
    _s();
    const [playlists, setPlaylists] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    async function loadPlaylists() {
        try {
            const fetchedPlaylists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$api$2f$playlist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllPlaylists"])();
            setPlaylists(fetchedPlaylists);
        } catch (error) {
            console.error('Failed to load playlists:', error);
        }
    }
    function handlePlaylistClick(playlist) {
        onPlaylistSelect?.(playlist);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlaylistSidebar.useEffect": ()=>{
            if (isOpen) {
                const fetchPlaylists = {
                    "PlaylistSidebar.useEffect.fetchPlaylists": async ()=>{
                        await loadPlaylists();
                    }
                }["PlaylistSidebar.useEffect.fetchPlaylists"];
                fetchPlaylists();
            }
        }
    }["PlaylistSidebar.useEffect"], [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `pt-16 h-[calc(100vh-4rem)] bg-background border-r border-border flex flex-col transition-all ease-in-out overflow-hidden ${isOpen ? 'w-80' : 'w-0'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-2 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: '/playlist',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["H4"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__["Library"], {}, void 0, false, {
                                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                                    lineNumber: 52,
                                    columnNumber: 7
                                }, this),
                                "Playlists"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                            lineNumber: 51,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                        lineNumber: 50,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {}, void 0, false, {
                                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                                    lineNumber: 59,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                                lineNumber: 58,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: onClose,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                                    lineNumber: 62,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                                lineNumber: 61,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                        lineNumber: 57,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                lineNumber: 49,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                className: "flex-1 w-full p-2",
                children: playlists.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center py-8 text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListMusic$3e$__["ListMusic"], {
                            className: "w-8 h-8 mb-2"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                            lineNumber: 70,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"], {
                            children: "No playlists yet"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                            lineNumber: 71,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Small"], {
                            children: "Create your first playlist"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                            lineNumber: 72,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                    lineNumber: 69,
                    columnNumber: 6
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1 w-full",
                    children: playlists.map((playlist)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$playlist$2f$playlist$2d$small$2d$horizontal$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaylistSmallHorizontalCard"], {
                            playlist: playlist,
                            handlePlaylistClick: handlePlaylistClick
                        }, playlist.id, false, {
                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                            lineNumber: 77,
                            columnNumber: 8
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                    lineNumber: 75,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                lineNumber: 67,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, this);
}
_s(PlaylistSidebar, "/7UASZ0pXGZcrJioajU839hHwfM=");
_c = PlaylistSidebar;
var _c;
__turbopack_context__.k.register(_c, "PlaylistSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/lib/api/spotify.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exchangeToken",
    ()=>exchangeToken,
    "getSpotifySettings",
    ()=>getSpotifySettings,
    "logoutSpotify",
    ()=>logoutSpotify,
    "refreshToken",
    ()=>refreshToken,
    "saveSpotifySettings",
    ()=>saveSpotifySettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/constants.ts [app-client] (ecmascript)");
;
async function getSpotifySettings() {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/v1/spotify/settings`);
        if (!response.ok) {
            throw new Error(`Failed to fetch Spotify settings: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching Spotify settings:', error);
        throw error;
    }
}
async function saveSpotifySettings(data) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/v1/spotify/settings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`Failed to save Spotify settings: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error saving Spotify settings:', error);
        throw error;
    }
}
async function exchangeToken(code, codeVerifier) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/v1/spotify/auth/exchange`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code,
                codeVerifier
            })
        });
        if (!response.ok) {
            throw new Error(`Failed to exchange token: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error exchanging token:', error);
        throw error;
    }
}
async function refreshToken() {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/v1/spotify/auth/refresh`, {
            method: 'POST'
        });
        if (!response.ok) {
            throw new Error(`Failed to refresh token: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error refreshing token:', error);
        throw error;
    }
}
async function logoutSpotify() {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/v1/spotify/auth/logout`, {
            method: 'POST'
        });
        if (!response.ok) {
            throw new Error(`Failed to logout: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error logging out:', error);
        throw error;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/context/spotify/spotify-auth-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpotifyAuthProvider",
    ()=>SpotifyAuthProvider,
    "useSpotifyAuth",
    ()=>useSpotifyAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$api$2f$spotify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/api/spotify.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const SpotifyAuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function SpotifyAuthProvider({ children }) {
    _s();
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpotifyAuthProvider.useEffect": ()=>{
            async function checkAuth() {
                try {
                    const settings = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$api$2f$spotify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpotifySettings"])();
                    if (settings.clientId && settings.clientSecret) {
                        setIsAuthenticated(true);
                    } else {
                        setIsAuthenticated(false);
                    }
                } catch  {
                    setIsAuthenticated(false);
                }
            }
            checkAuth();
        }
    }["SpotifyAuthProvider.useEffect"], []);
    const login = ()=>{
        window.location.href = '/auth/spotify/login';
    };
    const logout = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$api$2f$spotify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logoutSpotify"])();
            setIsAuthenticated(false);
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };
    const getAccessToken = async ()=>{
        try {
            const { accessToken, expiresAt } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$api$2f$spotify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["refreshToken"])();
            if (Date.now() < expiresAt) {
                return accessToken;
            }
        } catch  {
            setIsAuthenticated(false);
        }
        return null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpotifyAuthContext.Provider, {
        value: {
            isAuthenticated,
            login,
            logout,
            getAccessToken
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/context/spotify/spotify-auth-context.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, this);
}
_s(SpotifyAuthProvider, "JkS3Meyzlj18m4l86SBr9YDqEkQ=");
_c = SpotifyAuthProvider;
function useSpotifyAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SpotifyAuthContext);
    if (!context) {
        throw new Error('useSpotifyAuth must be used within SpotifyAuthProvider');
    }
    return context;
}
_s1(useSpotifyAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "SpotifyAuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientLayout",
    ()=>ClientLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$audio$2f$audio$2d$queue$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$header$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$playlist$2f$playlist$2d$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/context/player/player-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$spotify$2f$spotify$2d$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/context/spotify/spotify-auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
/* eslint-disable react-hooks/set-state-in-effect */ 'use client';
;
;
;
;
;
;
;
;
const HorizontalFullPlayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.HorizontalFullPlayer), {
    loadableGenerated: {
        modules: [
            "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = HorizontalFullPlayer;
function RightSidebarWrapper() {
    _s();
    const { isQueueOpen, setIsQueueOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RightSidebarWrapper.useEffect": ()=>{
            setMounted(true);
        }
    }["RightSidebarWrapper.useEffect"], []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$audio$2f$audio$2d$queue$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioQueue"], {
        isOpen: isQueueOpen,
        onClose: ()=>setIsQueueOpen(false)
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_s(RightSidebarWrapper, "dtOZ1H0Z7Iygs2UJKqwe3+GF7go=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"]
    ];
});
_c1 = RightSidebarWrapper;
function LeftSidebarWrapper() {
    _s1();
    const { isPlaylistSidebarOpen, setIsPlaylistSidebarOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeftSidebarWrapper.useEffect": ()=>{
            setMounted(true);
        }
    }["LeftSidebarWrapper.useEffect"], []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$playlist$2f$playlist$2d$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaylistSidebar"], {
        isOpen: isPlaylistSidebarOpen,
        onClose: ()=>setIsPlaylistSidebarOpen(false)
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
_s1(LeftSidebarWrapper, "Rm90igWswBYUaRsOGxZgbW4ktx4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerContext"]
    ];
});
_c2 = LeftSidebarWrapper;
function HeaderWrapper() {
    _s2();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeaderWrapper.useEffect": ()=>{
            setMounted(true);
        }
    }["HeaderWrapper.useEffect"], []);
    if (!mounted) {
        // Render a placeholder with the same height to avoid layout shift
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-0 left-0 right-0 z-50 h-16"
        }, void 0, false, {
            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$header$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, this);
}
_s2(HeaderWrapper, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c3 = HeaderWrapper;
function MainContent({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "pt-16 pb-24 flex-1 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
            className: "h-full",
            children: children
        }, void 0, false, {
            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
            lineNumber: 62,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, this);
}
_c4 = MainContent;
function ClientLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen bg-transparent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$spotify$2f$spotify$2d$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpotifyAuthProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayerContext"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-screen",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeftSidebarWrapper, {}, void 0, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
                                lineNumber: 73,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MainContent, {
                                    children: children
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
                                    lineNumber: 75,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
                                lineNumber: 74,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RightSidebarWrapper, {}, void 0, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
                                lineNumber: 77,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
                        lineNumber: 72,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderWrapper, {}, void 0, false, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
                        lineNumber: 79,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HorizontalFullPlayer, {}, void 0, false, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
                        lineNumber: 80,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
                lineNumber: 71,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
            lineNumber: 70,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
        lineNumber: 69,
        columnNumber: 3
    }, this);
}
_c5 = ClientLayout;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "HorizontalFullPlayer");
__turbopack_context__.k.register(_c1, "RightSidebarWrapper");
__turbopack_context__.k.register(_c2, "LeftSidebarWrapper");
__turbopack_context__.k.register(_c3, "HeaderWrapper");
__turbopack_context__.k.register(_c4, "MainContent");
__turbopack_context__.k.register(_c5, "ClientLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Repositories_Melira_tauri-migration_7962a0bb._.js.map