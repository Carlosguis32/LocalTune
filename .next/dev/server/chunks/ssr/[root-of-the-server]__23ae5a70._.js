module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/Repositories/Melira/tauri-migration/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
;
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/ui/scroll-area.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function ScrollArea({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "scroll-area",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative', className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/scroll-area.tsx",
                lineNumber: 11,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/scroll-area.tsx",
                lineNumber: 17,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
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
function ScrollBar({ className, orientation = 'vertical', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex touch-none p-px transition-colors select-none', orientation === 'vertical' && 'h-full w-3 border-l border-l-transparent', orientation === 'horizontal' && 'h-3 flex-col border-t border-t-transparent', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
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
;
}),
"[project]/Documents/Repositories/Melira/tauri-migration/context/player/player-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayerContext",
    ()=>PlayerContext,
    "usePlayerContext",
    ()=>usePlayerContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const PlayerContextProvider = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function loadAudioQueue() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
    const saved = undefined;
}
function loadNumber(key, defaultValue) {
    if ("TURBOPACK compile-time truthy", 1) return defaultValue;
    //TURBOPACK unreachable
    ;
    const saved = undefined;
}
function loadBoolean(key, defaultValue) {
    if ("TURBOPACK compile-time truthy", 1) return defaultValue;
    //TURBOPACK unreachable
    ;
    const saved = undefined;
}
function loadRepeatMode(key, defaultValue) {
    if ("TURBOPACK compile-time truthy", 1) return defaultValue;
    //TURBOPACK unreachable
    ;
    const saved = undefined;
}
function PlayerContext({ children }) {
    const [audioQueue, setAudioQueueState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(loadAudioQueue);
    const [currentQueuePosition, setCurrentQueuePositionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>loadNumber('currentQueuePosition', 0));
    const [repeatMode, setRepeatModeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>loadRepeatMode('repeatMode', 'off'));
    const [isInShuffleMode, setIsInShuffleModeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>loadBoolean('isInShuffleMode', true));
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [volume, setVolumeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>loadNumber('volume', 1));
    const [isQueueOpen, setIsQueueOpenState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>loadBoolean('isQueueOpen', false));
    const [isPlaylistSidebarOpen, setIsPlaylistSidebarOpenState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>loadBoolean('isPlaylistSidebarOpen', false));
    // Setters that also update localStorage
    function setAudioQueue(queue) {
        setAudioQueueState(queue);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    function setCurrentQueuePosition(value) {
        setCurrentQueuePositionState(value);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    function setRepeatMode(value) {
        setRepeatModeState(value);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    function setIsInShuffleMode(value) {
        setIsInShuffleModeState(value);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    function setVolume(value) {
        setVolumeState(value);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    function setIsQueueOpen(value) {
        setIsQueueOpenState(value);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    function setIsPlaylistSidebarOpen(value) {
        setIsPlaylistSidebarOpenState(value);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    // Restore state from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerContextProvider.Provider, {
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
function usePlayerContext() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(PlayerContextProvider);
    if (!context) throw new Error('usePlayerContext must be used within a PlayerContext provider');
    return context;
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/utils.ts [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(display1Class, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
function Display2({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(display2Class, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
function Display3({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(display3Class, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
function H1({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(h1Class, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
function H2({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(h2Class, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, this);
}
function H3({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(h3Class, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
function H4({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(h4Class, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, this);
}
function H5({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(h5Class, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
function H6({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(h6Class, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 54,
        columnNumber: 9
    }, this);
}
function P({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(pClass, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, this);
}
function Small({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(smallClass, className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/image/image.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Image",
    ()=>Image
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
const PLACEHOLDER_SRC = '/placeholder.webp';
function Image({ src, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        src: src || PLACEHOLDER_SRC,
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/image/image.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-small-horizontal-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioSmallHorizontalCard",
    ()=>AudioSmallHorizontalCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/context/player/player-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$image$2f$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/image/image.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function AudioSmallHorizontalCard(props) {
    const { className, audio, audioIndex, handleAudioClick, handleRemoveAudioButtonClick } = props;
    const { currentQueuePosition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlayerContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('group grid gap-2 p-1 rounded-md cursor-pointer hover:bg-muted-secondary transition-all items-center', audioIndex !== currentQueuePosition ? 'grid-cols-[50px_1fr_auto]' : 'grid-cols-[50px_1fr]', className),
        onClick: ()=>handleAudioClick(audioIndex),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$image$2f$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"], {
                        className: `${audioIndex === currentQueuePosition && 'text-primary-custom'} truncate`,
                        children: audio.data.title || audio.data.path?.split('\\').pop() || 'Unknown'
                    }, void 0, false, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-small-horizontal-card.tsx",
                        lineNumber: 40,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Small"], {
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
            audioIndex !== currentQueuePosition && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                size: "icon",
                className: "w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity",
                onClick: (e)=>{
                    handleRemoveAudioButtonClick(e, audioIndex);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioQueue",
    ()=>AudioQueue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/context/player/player-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListMusic$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/list-music.js [app-ssr] (ecmascript) <export default as ListMusic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/music.js [app-ssr] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$audio$2f$audio$2d$small$2d$horizontal$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-small-horizontal-card.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function AudioQueue({ isOpen, onClose }) {
    const { audioQueue, currentQueuePosition, setCurrentQueuePosition, setAudioQueue, setIsPlaying } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlayerContext"])();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `pt-16 h-[calc(100vh-4rem)] bg-background border-l border-border flex flex-col transition-all ease-in-out overflow-hidden ${isOpen ? 'w-80' : 'w-0'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-2 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["H4"], {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListMusic$3e$__["ListMusic"], {}, void 0, false, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        onClick: onClose,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                className: "flex-1",
                children: audioQueue.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center py-8 text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                            className: "w-8 h-8 mb-2"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx",
                            lineNumber: 59,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"], {
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
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["H4"], {
                            className: "py-2 pb-1 px-4",
                            children: "Now playing:"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx",
                            lineNumber: 64,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 pt-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$audio$2f$audio$2d$small$2d$horizontal$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioSmallHorizontalCard"], {
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
                        currentQueuePosition < audioQueue.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["H4"], {
                                    className: "py-2 pb-1 px-4",
                                    children: "Next on queue:"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx",
                                    lineNumber: 77,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 pt-0 space-y-1",
                                    children: audioQueue.slice(currentQueuePosition + 1).map((audio, relativeIndex)=>{
                                        const index = currentQueuePosition + 1 + relativeIndex;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$audio$2f$audio$2d$small$2d$horizontal$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioSmallHorizontalCard"], {
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
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-accent focus-visible:transition', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, this);
}
;
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/search/search-bar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchBar",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
function SearchBar({ placeholder = 'Play something...', onSearch }) {
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleInputChange = (e)=>{
        setQuery(e.target.value);
        if (onSearch) {
            onSearch(e.target.value);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-md mx-auto relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
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
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/context/player/player-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/library.js [app-ssr] (ecmascript) <export default as Library>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$search$2f$search$2d$bar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/search/search-bar.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function Header() {
    const { isPlaylistSidebarOpen, setIsPlaylistSidebarOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlayerContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-background border-b border-border h-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex items-center justify-between px-6 py-3 h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            onClick: ()=>setIsPlaylistSidebarOpen(!isPlaylistSidebarOpen),
                            className: `${isPlaylistSidebarOpen && 'bg-accent'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__["Library"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$search$2f$search$2d$bar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchBar"], {}, void 0, false, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {}, void 0, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx",
                                lineNumber: 36,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx",
                            lineNumber: 35,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: '/settings',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {}, void 0, false, {
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
}),
"[project]/Documents/Repositories/Melira/tauri-migration/lib/api/playlist.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllPlaylists",
    ()=>getAllPlaylists,
    "getPlaylistById",
    ()=>getPlaylistById
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/@tauri-apps/api/core.js [app-ssr] (ecmascript)");
;
async function getAllPlaylists() {
    try {
        const playlists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invoke"])('get_all_playlists');
        return playlists;
    } catch (error) {
        console.error('Error fetching playlists:', error);
        throw error;
    }
}
async function getPlaylistById(playlistId) {
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invoke"])('get_playlist_by_id', {
            id: playlistId
        });
        // Convertir el resultado al formato esperado
        return {
            ...result.playlist,
            audioFiles: result.audio_files
        };
    } catch (error) {
        console.error('Error fetching playlist:', error);
        throw error;
    }
}
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-small-horizontal-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlaylistSmallHorizontalCard",
    ()=>PlaylistSmallHorizontalCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$image$2f$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/image/image.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx [app-ssr] (ecmascript)");
;
;
;
;
function PlaylistSmallHorizontalCard(props) {
    const { playlist, handlePlaylistClick } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('group grid grid-cols-[50px_1fr] gap-2 p-1.5 rounded-md cursor-pointer hover:bg-muted-secondary transition-all items-center'),
        onClick: ()=>handlePlaylistClick(playlist),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$image$2f$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"], {
                        className: "truncate",
                        children: playlist.name || 'Unnamed Playlist'
                    }, void 0, false, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-small-horizontal-card.tsx",
                        lineNumber: 30,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Small"], {
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
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlaylistSidebar",
    ()=>PlaylistSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$api$2f$playlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/api/playlist.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/library.js [app-ssr] (ecmascript) <export default as Library>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListMusic$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/list-music.js [app-ssr] (ecmascript) <export default as ListMusic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/typography.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$playlist$2f$playlist$2d$small$2d$horizontal$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-small-horizontal-card.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function PlaylistSidebar({ isOpen, onClose, onPlaylistSelect }) {
    const [playlists, setPlaylists] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    async function loadPlaylists() {
        try {
            const fetchedPlaylists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$api$2f$playlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllPlaylists"])();
            setPlaylists(fetchedPlaylists);
        } catch (error) {
            console.error('Failed to load playlists:', error);
        }
    }
    function handlePlaylistClick(playlist) {
        onPlaylistSelect?.(playlist);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            const fetchPlaylists = async ()=>{
                await loadPlaylists();
            };
            fetchPlaylists();
        }
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `pt-16 h-[calc(100vh-4rem)] bg-background border-r border-border flex flex-col transition-all ease-in-out overflow-hidden ${isOpen ? 'w-80' : 'w-0'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-2 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: '/playlist',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["H4"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$library$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Library$3e$__["Library"], {}, void 0, false, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {}, void 0, false, {
                                    fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                                    lineNumber: 59,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                                lineNumber: 58,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: onClose,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                className: "flex-1 w-full p-2",
                children: playlists.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center py-8 text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListMusic$3e$__["ListMusic"], {
                            className: "w-8 h-8 mb-2"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                            lineNumber: 70,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"], {
                            children: "No playlists yet"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx",
                            lineNumber: 71,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Small"], {
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
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1 w-full",
                    children: playlists.map((playlist)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$playlist$2f$playlist$2d$small$2d$horizontal$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaylistSmallHorizontalCard"], {
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
}),
"[project]/Documents/Repositories/Melira/tauri-migration/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL
]);
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8090");
}),
"[project]/Documents/Repositories/Melira/tauri-migration/lib/api/spotify.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/constants.ts [app-ssr] (ecmascript)");
;
async function getSpotifySettings() {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/v1/spotify/settings`);
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
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/v1/spotify/settings`, {
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
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/v1/spotify/auth/exchange`, {
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
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/v1/spotify/auth/refresh`, {
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
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/v1/spotify/auth/logout`, {
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
}),
"[project]/Documents/Repositories/Melira/tauri-migration/context/spotify/spotify-auth-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpotifyAuthProvider",
    ()=>SpotifyAuthProvider,
    "useSpotifyAuth",
    ()=>useSpotifyAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$api$2f$spotify$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/lib/api/spotify.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const SpotifyAuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function SpotifyAuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function checkAuth() {
            try {
                const settings = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$api$2f$spotify$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpotifySettings"])();
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
    }, []);
    const login = ()=>{
        window.location.href = '/auth/spotify/login';
    };
    const logout = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$api$2f$spotify$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logoutSpotify"])();
            setIsAuthenticated(false);
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };
    const getAccessToken = async ()=>{
        try {
            const { accessToken, expiresAt } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$lib$2f$api$2f$spotify$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["refreshToken"])();
            if (Date.now() < expiresAt) {
                return accessToken;
            }
        } catch  {
            setIsAuthenticated(false);
        }
        return null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SpotifyAuthContext.Provider, {
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
function useSpotifyAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SpotifyAuthContext);
    if (!context) {
        throw new Error('useSpotifyAuth must be used within SpotifyAuthProvider');
    }
    return context;
}
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientLayout",
    ()=>ClientLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$audio$2f$audio$2d$queue$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/audio/audio-queue.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$header$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/header/header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$playlist$2f$playlist$2d$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/playlist/playlist-sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/context/player/player-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$spotify$2f$spotify$2d$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/context/spotify/spotify-auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Repositories/Melira/tauri-migration/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
/* eslint-disable react-hooks/set-state-in-effect */ 'use client';
;
;
;
;
;
;
;
;
;
const HorizontalFullPlayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/Documents/Repositories/Melira/tauri-migration/components/player/horizontal-full-player.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function RightSidebarWrapper() {
    const { isQueueOpen, setIsQueueOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlayerContext"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$audio$2f$audio$2d$queue$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioQueue"], {
        isOpen: isQueueOpen,
        onClose: ()=>setIsQueueOpen(false)
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
function LeftSidebarWrapper() {
    const { isPlaylistSidebarOpen, setIsPlaylistSidebarOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlayerContext"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$playlist$2f$playlist$2d$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaylistSidebar"], {
        isOpen: isPlaylistSidebarOpen,
        onClose: ()=>setIsPlaylistSidebarOpen(false)
    }, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
function HeaderWrapper() {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        // Render a placeholder with the same height to avoid layout shift
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-0 left-0 right-0 z-50 h-16"
        }, void 0, false, {
            fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$header$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, this);
}
function MainContent({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "pt-16 pb-24 flex-1 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
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
function ClientLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen bg-transparent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$spotify$2f$spotify$2d$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpotifyAuthProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$context$2f$player$2f$player$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlayerContext"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-screen",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LeftSidebarWrapper, {}, void 0, false, {
                                fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
                                lineNumber: 73,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MainContent, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RightSidebarWrapper, {}, void 0, false, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderWrapper, {}, void 0, false, {
                        fileName: "[project]/Documents/Repositories/Melira/tauri-migration/components/layout/client-layout.tsx",
                        lineNumber: 79,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Repositories$2f$Melira$2f$tauri$2d$migration$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HorizontalFullPlayer, {}, void 0, false, {
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__23ae5a70._.js.map