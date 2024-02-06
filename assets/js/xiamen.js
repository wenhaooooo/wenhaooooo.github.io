document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery");

    for (let i = 1; i <= 38; i++) {
        createImageElement(i);
    }

    function createImageElement(index) {
        const img = document.createElement("img");
        img.src = `assets/xiamen/${index}.jpg`;
        img.alt = `Image ${index}`;
        img.addEventListener("click", () => openImage(index));
        galleryContainer.appendChild(img);
    }

    function openImage(index) {
        // 在这里可以添加打开大图的逻辑，例如使用弹窗或模态框
        console.log(`Open image ${index}`);
    }
});
