// merge-sort-animation.js

const container = document.getElementById("array");

let values = [];
const size = 16;
const speed = 140;
const pauseBetweenRuns = 1200;

function generateArray() {
    container.innerHTML = "";
    values = [];

    for (let i = 0; i < size; i++) {
        const value = Math.floor(Math.random() * 220) + 40;
        values.push(value);

        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = value + "px";
        container.appendChild(bar);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function mergeSort(start, end) {
    if (end - start <= 1) return;

    const mid = Math.floor((start + end) / 2);

    await mergeSort(start, mid);
    await mergeSort(mid, end);
    await merge(start, mid, end);
}

async function merge(start, mid, end) {
    let left = values.slice(start, mid);
    let right = values.slice(mid, end);

    let i = 0, j = 0, k = start;
    let bars = document.querySelectorAll(".bar");

    while (i < left.length && j < right.length) {
        bars[k].classList.add("active");
        await sleep(speed);

        if (left[i] <= right[j]) {
            values[k] = left[i++];
        } else {
            values[k] = right[j++];
        }

        bars[k].style.height = values[k] + "px";
        bars[k].classList.remove("active");
        bars[k].classList.add("merged");
        k++;
    }

    while (i < left.length) {
        values[k] = left[i++];
        bars[k].style.height = values[k] + "px";
        bars[k].classList.add("merged");
        k++;
        await sleep(speed);
    }

    while (j < right.length) {
        values[k] = right[j++];
        bars[k].style.height = values[k] + "px";
        bars[k].classList.add("merged");
        k++;
        await sleep(speed);
    }
}

async function startInfiniteAnimation() {
    while (true) {
        generateArray();
        await sleep(400);

        await mergeSort(0, values.length);

        // финальная подсветка
        document.querySelectorAll(".bar").forEach(bar => {
            bar.classList.remove("active");
            bar.classList.add("merged");
        });

        await sleep(pauseBetweenRuns);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    startInfiniteAnimation();
});