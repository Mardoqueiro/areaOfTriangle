function calculateTriangleArea() {
    const base = document.getElementById("triangle-base");
    const height = document.getElementById("triangle-height");
    const areaElement = document.getElementById("triangle-area");

    if (base && height && areaElement) {
        const triangleBase = parseFloat(base.value);
        const triangleHeight = parseFloat(height.value);
        const area = (triangleBase * triangleHeight) / 2;
        areaElement.textContent = `Area of Triangle: ${area}`;
    }
}