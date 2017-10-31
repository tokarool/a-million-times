export default (w, h, offset = 0, offset2 = 0) => {
    const value = 0.5 + offset;
    const value2 = 0 + offset + offset2;

    const values = new Float32Array(w * h * 2);
    let index = 0;
    for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
            values[index] = value;
            values[index + 1] = value2;
            index += 2;
        }
    }
    return values;
};
