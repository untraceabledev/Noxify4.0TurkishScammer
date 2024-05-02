const ResourceName = GetParentResourceName();

const Handlers = new Map();

let verbose = false;

function registerHandler(type, handler) {
    Handlers.set(type, handler);
}

window.addEventListener("message", (event) => {
    const handler = Handlers.get(event.data.type);

    if (!handler) return;

    handler(event.data.data);
});

const DrawEntries = new Map();

function addDrawEntry(data) {
    const entry = {...data, element: null};

    const options = entry.options;

    DrawEntries.set(data.uid, entry);

    const container = document.getElementById("container");

    const element = document.createElement("div");

    entry.element = element;

    element.className = "drawEntry";

    element.style.visibility = "hidden";

    container.appendChild(element);

    const text = document.createElement("p");

    text.innerText = entry.text;

    text.className = "drawEntryText";

    if (options.color) text.style.color = options.color;

    if (options.font) text.style.fontFamily = options.font;

    if (options.background) text.style.backgroundColor = `rgba(${options.background.join(", ")})`;

    element.appendChild(text);
}

function setDrawVisibility(uid, visible) {
    const entry = DrawEntries.get(uid);

    if (!entry) return;

    entry.drawing = visible;

    entry.element.style.visibility = entry.drawing ? "visible" : "hidden";
}

function updateDrawPosition(uid, x, y, scale, onScreen) {
    const entry = DrawEntries.get(uid);

    if (!entry) return;

    if (x) entry.element.style.left = `${x}px`;

    if (y) entry.element.style.top = `${y}px`;

    if (scale) entry.element.style.scale = scale;

    if (!entry.drawing) return;

    entry.element.style.visibility = onScreen ? "visible" : "hidden";
}

function RemoveDrawEntry(uid) {
    const entry = DrawEntries.get(uid);

    if (!entry) return;

    DrawEntries.delete(uid);

    entry.element.remove();
}

let debugPrint = (...args) => {
    if (!verbose) return;
    console.log(...args)
}

debugPrint(`[NUI] ${ResourceName} started`)

registerHandler("add", (data) => {
    debugPrint(`Added data ${JSON.stringify(data, null, 2)}`);

    if (DrawEntries.has(data.uid)) return;

    addDrawEntry(data);
});

registerHandler("remove", (data) => {
    debugPrint(`Removed data ${JSON.stringify(data, null, 2)}`);

    RemoveDrawEntry(data.uid);
});

registerHandler("draw", (data) => {
    debugPrint(`Draw data ${JSON.stringify(data, null, 2)}`);

    for (const entry of data) {
        setDrawVisibility(entry.uid, entry.drawing);
    }
});

registerHandler("update", (data) => {
    for (const entry of data) {
        updateDrawPosition(entry.uid, entry.x, entry.y, entry.scale, entry.onScreen);
    }
});

registerHandler("clear", () => {
    debugPrint(`Cleared data`);

    for (const entry of DrawEntries.values()) {
        entry.element.remove();
    }

    DrawEntries.clear();
})

registerHandler("verbose", (data) => {
    verbose = !verbose;
});