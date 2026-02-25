<template>
    <svg width="80" height="30" viewBox="0 0 80 30" xmlns="http://www.w3.org/2000/svg">
        <!-- Container for the dots -->
        <g>
            <!-- First dot (always visible) -->
            <text class="dot" x="30" y="15">
                .
                <animate
                    attributeName="opacity"
                    values="1;1;1;0"
                    keyTimes="0;0.33;0.66;1"
                    dur="1s"
                    repeatCount="indefinite"
                />
            </text>

            <!-- Second dot -->
            <text class="dot" x="40" y="15" opacity="0">
                .
                <!-- Animation for the second dot -->
                <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.33;0.66;1"
                    dur="1s"
                    repeatCount="indefinite"
                />
            </text>

            <!-- Third dot -->
            <text class="dot" x="50" y="15" opacity="0">
                .
                <!-- Animation for the third dot -->
                <animate
                    attributeName="opacity"
                    values="0;0;1;0"
                    keyTimes="0;0.33;0.66;1"
                    dur="1s"
                    repeatCount="indefinite"
                />
            </text>
        </g>
    </svg>
</template>
<style>
.dot {
    font-family: sans-serif; /* Or any font you prefer */
    font-size: 40px;
    fill: #333; /* Dark grey color for the dots */
    dominant-baseline: central; /* Align text vertically in the middle */
    text-anchor: middle; /* Align text horizontally in the middle */
}
</style>
