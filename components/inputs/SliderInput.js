import React, {useCallback, useEffect, useRef, useState} from "react";

export default function SliderInput({
                                        steps,
                                 min,
                                 max,
                                 onChangeEvent,
                                        maxValue,
                                        isNotDouble,
    minValue,
                             }) {
    const [minVal, setMinVal] = useState(minValue||min);
    const [maxVal, setMaxVal] = useState(maxValue || max);
    const minValRef = useRef(null);
    const maxValRef = useRef(null);
    const range = useRef(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

            if (range.current) {

                range.current.style.left = `${minPercent}%`;
                // minThumbRef.current.style.left = `${minPercent - 1}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                // maxThumbRef.current.style.left = `${maxPercent - minPercent -4}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChangeEvent({ min: minVal, max: maxVal });
    }, [minVal, maxVal]);
    return (
        <div className={"h-10 overflow-hidden group flex items-center"}>
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                step={`${steps || 1}`}
                ref={minValRef}
                onChange={(event) => {
                    const value = Math.min(+event.target.value, maxVal - 1);
                    setMinVal(value);
                    event.target.value = value.toString();
                }}
                className={`${isNotDouble&&"hidden"} thumb thumb--zindex-3 ${minVal > max - 100 ? "thumb--zindex-5" : ""}`}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                ref={maxValRef}
                step={`${steps || 1}`}
                onChange={(event) => {
                    const value = Math.max(+event.target.value, minVal + 1);
                    setMaxVal(value);
                    event.target.value = value.toString();
                }}
                list={"customrange"}
                className="thumb thumb--zindex-4"
            />


            <div className="slider">
                <div className="slider__track"></div>
                <div ref={range} className="slider__range"></div>
                {/*<span ref={minThumbRef} className={"thumb-label"}>*/}
                {/*    <span className={"transform rotate-[45deg]"}>*/}
                {/*    {minVal}*/}
                {/*        </span>*/}
                {/*</span>*/}
                {/*<span ref={maxThumbRef} className={"thumb-label"}>*/}
                {/*    <span className={"transform rotate-45"}>*/}
                {/*    {maxVal}*/}
                {/*        </span>*/}
                {/*</span>*/}
                {/*<div className="slider__left-value">{minVal}</div>*/}
                {/*<div className="slider__right-value">{maxVal}</div>*/}
            </div>
        </div>
    )
}
