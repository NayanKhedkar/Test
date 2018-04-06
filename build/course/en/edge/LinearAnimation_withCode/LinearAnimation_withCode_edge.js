/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['BATC_AFD_GOTHIC']='<link rel=\"stylesheet\" href=\"styles/textStyling.css\"type=\"text/css\"media=\"screen\"tiltle=\"\"charset=\"utf-8\"/>';
    fonts['Arial']='<link rel=\"stylesheet\" type=\"text/css\" href=\"styles/textStyling.css\" />';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'FireExtinguishingPanel',
                type: 'image',
                rect: ['5px', '30px','713px','269px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"FireExtinguishingPanel.svg",'0px','0px']
            },
            {
                id: 'FireExtingHandle_Left',
                type: 'image',
                rect: ['56px', '117px','133px','184px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"FireExtingHandle_Left.svg",'0px','0px']
            },
            {
                id: 'FireExitngHandle_1-Left',
                type: 'image',
                rect: ['17px', '116px','169px','192px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"FireExitngHandle_1-Left.svg",'0px','0px']
            },
            {
                id: 'FireExtingHandle_2-Left',
                type: 'image',
                rect: ['47px', '117px','180px','192px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"FireExtingHandle_2-Left.svg",'0px','0px']
            },
            {
                id: 'L_Dimmed4',
                type: 'image',
                rect: ['88px', '188px','31px','62px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"L_Dimmed.svg",'0px','0px']
            },
            {
                id: 'Bottle1',
                type: 'ellipse',
                rect: ['265px', '484px','69px','69px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(114,114,114,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Bottle2',
                type: 'ellipse',
                rect: ['387px', '484px','69px','69px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(114,114,114,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'RedBottle2',
                type: 'ellipse',
                rect: ['387px', '484px','69px','69px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,0,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'BlueBottle1',
                type: 'ellipse',
                rect: ['265px', '484px','69px','69px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(0,131,202,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'FireExtiguishingSchematic2',
                type: 'image',
                rect: ['38px', '375px','654px','234px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"FireExtiguishingSchematic.svg",'0px','0px']
            },
            {
                id: 'LeftEngine_Blue',
                type: 'image',
                rect: ['38px', '374px','60px','94px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"LeftEngine_Blue.svg",'0px','0px']
            },
            {
                id: 'LeftEngine_Red',
                type: 'image',
                rect: ['39px', '374px','60px','94px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"LeftEngine_Red.svg",'0px','0px']
            },
            {
                id: 'Discharge_Bottle2',
                type: 'image',
                rect: ['68px', '412px','317px','143px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Discharge_Bottle2.svg",'0px','0px']
            },
            {
                id: 'Discharge_Bottle1',
                type: 'image',
                rect: ['68px', '412px','198px','143px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Discharge_Bottle1.svg",'0px','0px']
            },
            {
                id: 'OpenValve_Break',
                type: 'image',
                rect: ['248px', '539px','46px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"OpenValve.svg",'0px','0px']
            },
            {
                id: 'Ellipse1',
                type: 'ellipse',
                rect: ['251px', '534px','40px','40px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(0,0,0,0.00)"],
                stroke: [2,"rgba(255,0,0,1.00)","solid"]
            },
            {
                id: 'OpenValve_Break2',
                type: 'image',
                rect: ['370px', '539px','46px','36px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"OpenValve.svg",'0px','0px']
            },
            {
                id: 'Ellipse2',
                type: 'ellipse',
                rect: ['370px', '534px','40px','40px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(0,0,0,0.00)"],
                stroke: [2,"rgba(255,0,0,1.00)","solid"]
            },
            {
                id: 'SchematicRegTextCopy',
                type: 'text',
                rect: ['44px', '379px','auto','auto','auto', 'auto'],
                text: "Left<br>Engine",
                align: "center",
                userClass: "SchematicRegular",
                font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'SchematicRegTextCopy3',
                type: 'text',
                rect: ['344px', '617px','auto','auto','auto', 'auto'],
                text: "To<br>APU",
                align: "center",
                userClass: "SchematicRegular",
                font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'SchematicRegTextCopy4',
                type: 'text',
                rect: ['260px', '464px','auto','auto','auto', 'auto'],
                text: "Bottle 1",
                align: "center",
                userClass: "SchematicBold",
                font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'SchematicRegTextCopy5',
                type: 'text',
                rect: ['383px', '464px','auto','auto','auto', 'auto'],
                text: "Bottle 2",
                align: "center",
                userClass: "SchematicBold",
                font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'SchematicRegTextCopy2',
                type: 'text',
                rect: ['639px', '379px','auto','auto','auto', 'auto'],
                text: "Right<br>Engine",
                align: "center",
                userClass: "SchematicRegular",
                font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'MastWarningPanel2',
                type: 'image',
                rect: ['697px', '396px','493px','246px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"MastWarningPanel.svg",'0px','0px']
            },
            {
                id: 'EICAS2',
                type: 'image',
                rect: ['858px', '38px','265px','118px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"EICAS.svg",'0px','0px'],
                transform: [[],[],[],['1.1','1.1']]
            },
            {
                id: 'EICAS_Messages4',
                type: 'group',
                rect: ['845', '194px','291','160','auto', 'auto'],
                c: [
                {
                    id: 'RectangleCopy4',
                    type: 'rect',
                    rect: ['0px', '0px','291px','160px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'AFDLarge-displayYellow2Copy3',
                    type: 'text',
                    rect: ['31px', '10px','auto','auto','auto', 'auto'],
                    text: "FIRE BTL 2 LO PRESS",
                    align: "left",
                    userClass: "AFDLarge-displayYellow",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'AFDLarge-displayYellowCopy3',
                    type: 'text',
                    rect: ['31px', '27px','auto','auto','auto', 'auto'],
                    text: "FIRE BTL 1 LO PRESS",
                    align: "left",
                    userClass: "AFDLarge-displayYellow",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'AFDLarge-displayCyanCopy3',
                    type: 'text',
                    rect: ['31px', '45px','auto','auto','auto', 'auto'],
                    text: "GEN 1(2) FAIL",
                    align: "left",
                    userClass: "AFDLarge-displayCyan",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'AFDLarge-displayWhite2Copy3',
                    type: 'text',
                    rect: ['31px', '81px','131px','18px','auto', 'auto'],
                    text: "L ENG SHUTDOWN",
                    align: "left",
                    userClass: "AFDLarge-white",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'AFDLarge-displayWhiteCopy3',
                    type: 'text',
                    rect: ['31px', '63px','auto','auto','auto', 'auto'],
                    text: "L ENG SOVS CLSD",
                    align: "left",
                    userClass: "AFDLarge-white",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                }]
            },
            {
                id: 'EICAS_Messages3',
                type: 'group',
                rect: ['845px', '194px','291','160','auto', 'auto'],
                c: [
                {
                    id: 'RectangleCopy',
                    type: 'rect',
                    rect: ['0px', '0px','291px','160px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'AFDLarge-displayRed',
                    type: 'text',
                    rect: ['31px', '10px','auto','auto','auto', 'auto'],
                    text: "L ENG FIRE",
                    align: "left",
                    userClass: "AFDLarge-displayRed",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'AFDLarge-displayYellow2',
                    type: 'text',
                    rect: ['31px', '28px','auto','auto','auto', 'auto'],
                    text: "FIRE BTL 2 LO PRESS",
                    align: "left",
                    userClass: "AFDLarge-displayYellow",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'AFDLarge-displayYellow',
                    type: 'text',
                    rect: ['31px', '45px','auto','auto','auto', 'auto'],
                    text: "FIRE BTL 1 LO PRESS",
                    align: "left",
                    userClass: "AFDLarge-displayYellow",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'AFDLarge-displayCyan',
                    type: 'text',
                    rect: ['31px', '63px','auto','auto','auto', 'auto'],
                    text: "GEN 1(2) FAIL",
                    align: "left",
                    userClass: "AFDLarge-displayCyan",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'AFDLarge-displayWhite2',
                    type: 'text',
                    rect: ['31px', '97px','131px','18px','auto', 'auto'],
                    text: "L ENG SHUTDOWN",
                    align: "left",
                    userClass: "AFDLarge-white",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'AFDLarge-displayWhite',
                    type: 'text',
                    rect: ['31px', '80px','auto','auto','auto', 'auto'],
                    text: "L ENG SOVS CLSD",
                    align: "left",
                    userClass: "AFDLarge-white",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                }]
            },
            {
                id: 'EICAS_Messages2',
                type: 'group',
                rect: ['845', '194px','291','160','auto', 'auto'],
                c: [
                {
                    id: 'RectangleCopy3',
                    type: 'rect',
                    rect: ['0px', '0px','291px','160px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'AFDLarge-displayRedCopy13',
                    type: 'text',
                    rect: ['31px', '10px','auto','auto','auto', 'auto'],
                    text: "L ENG FIRE",
                    align: "left",
                    userClass: "AFDLarge-displayRed",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'AFDLarge-displayYellowCopy2',
                    type: 'text',
                    rect: ['31px', '28px','auto','auto','auto', 'auto'],
                    text: "FIRE BTL 1 LO PRESS",
                    align: "left",
                    userClass: "AFDLarge-displayYellow",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'AFDLarge-displayCyanCopy2',
                    type: 'text',
                    rect: ['31px', '45px','auto','auto','auto', 'auto'],
                    text: "GEN 1(2) FAIL",
                    align: "left",
                    userClass: "AFDLarge-displayCyan",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'AFDLarge-displayWhite2Copy2',
                    type: 'text',
                    rect: ['31px', '81px','131px','18px','auto', 'auto'],
                    text: "L ENG SHUTDOWN",
                    align: "left",
                    userClass: "AFDLarge-white",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'AFDLarge-displayWhiteCopy2',
                    type: 'text',
                    rect: ['31px', '63px','auto','auto','auto', 'auto'],
                    text: "L ENG SOVS CLSD",
                    align: "left",
                    userClass: "AFDLarge-white",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                }]
            },
            {
                id: 'EICAS_Messages1',
                type: 'group',
                rect: ['845', '194px','291','160','auto', 'auto'],
                c: [
                {
                    id: 'RectangleCopy2',
                    type: 'rect',
                    rect: ['0px', '0px','291px','160px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'AFDLarge-displayRedCopy12',
                    type: 'text',
                    rect: ['31px', '10px','auto','auto','auto', 'auto'],
                    text: "L ENG FIRE",
                    align: "left",
                    userClass: "AFDLarge-displayRed",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'AFDLarge-displayCyanCopy',
                    type: 'text',
                    rect: ['31px', '28px','auto','auto','auto', 'auto'],
                    text: "GEN 1(2) FAIL",
                    align: "left",
                    userClass: "AFDLarge-displayCyan",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'AFDLarge-displayWhite2Copy',
                    type: 'text',
                    rect: ['31px', '45px','131px','18px','auto', 'auto'],
                    text: "L ENG SHUTDOWN",
                    align: "left",
                    userClass: "AFDLarge-white",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                },
                {
                    id: 'AFDLarge-displayWhiteCopy',
                    type: 'text',
                    rect: ['31px', '63px','auto','auto','auto', 'auto'],
                    text: "L ENG SOVS CLSD",
                    align: "left",
                    userClass: "AFDLarge-white",
                    font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
                }]
            },
            {
                id: 'EICAS_Fire',
                type: 'image',
                rect: ['857px', '112px','58px','26px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"EICAS_Fire.svg",'0px','0px'],
                transform: [[],[],[],['1.1','1.1']]
            },
            {
                id: 'CaptionTextCopy6',
                type: 'text',
                rect: ['960px', '162px','auto','auto','auto', 'auto'],
                text: "EICAS",
                align: "left",
                userClass: "Caption",
                font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'CaptionTextCopy7',
                type: 'text',
                rect: ['960px', '358px','auto','auto','auto', 'auto'],
                text: "EICAS",
                align: "left",
                userClass: "Caption",
                font: ['Arial', 24, "rgba(0,0,0,1)", "bold", "none", "normal"]
            },
            {
                id: 'single_chime2',
                type: 'audio',
                tag: 'audio',
                rect: ['1325', '346','320px','45px','auto', 'auto'],
                source: ['media/single_chime.wav'],
                preload: 'auto'
            },
            {
                id: 'Caution_Button',
                type: 'image',
                rect: ['1097px', '554px','57px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Caution%20Button.svg",'0px','0px']
            },
            {
                id: 'Hotspot_Caution',
                type: 'rect',
                rect: ['1097px', '556px','56px','25px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'triple_chime_left_engine_fire',
                type: 'audio',
                tag: 'audio',
                rect: ['575', '653','320px','45px','auto', 'auto'],
                source: ['media/triple_chime_left_engine_fire.wav'],
                preload: 'auto'
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_FireExtingHandle_Left}": [
                ["style", "top", '117px'],
                ["style", "opacity", '1'],
                ["style", "left", '56px']
            ],
            "${_Ellipse2}": [
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '40px'],
                ["style", "top", '534px'],
                ["style", "height", '40px'],
                ["color", "border-color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '370px'],
                ["style", "opacity", '0']
            ],
            "${_FireExtinguishingPanel}": [
                ["style", "left", '5px'],
                ["style", "top", '30px']
            ],
            "${_LeftEngine_Blue}": [
                ["style", "top", '374px'],
                ["style", "height", '94px'],
                ["style", "opacity", '0'],
                ["style", "left", '38px'],
                ["style", "width", '60px']
            ],
            "${_Hotspot_Caution}": [
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '1097px']
            ],
            "${_SchematicRegTextCopy5}": [
                ["style", "top", '464px'],
                ["style", "text-align", 'center'],
                ["style", "left", '383px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Ellipse1}": [
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '40px'],
                ["style", "top", '534px'],
                ["style", "height", '40px'],
                ["color", "border-color", 'rgba(255,0,0,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '251px']
            ],
            "${_Bottle2}": [
                ["color", "background-color", 'rgba(114,114,114,1.00)'],
                ["style", "height", '69px'],
                ["style", "top", '484px'],
                ["style", "left", '387px'],
                ["style", "width", '69px']
            ],
            "${_AFDLarge-displayCyan}": [
                ["style", "top", '63px'],
                ["style", "left", '31px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_AFDLarge-displayRed}": [
                ["style", "top", '10px'],
                ["style", "left", '31px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_SchematicRegTextCopy}": [
                ["style", "top", '379px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "text-align", 'center'],
                ["style", "left", '44px']
            ],
            "${_AFDLarge-displayYellow2Copy3}": [
                ["style", "top", '10px'],
                ["style", "left", '31px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_AFDLarge-displayWhiteCopy}": [
                ["style", "top", '63px'],
                ["style", "left", '31px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_AFDLarge-displayYellowCopy3}": [
                ["style", "top", '27px'],
                ["style", "left", '31px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_EICAS_Messages1}": [
                ["style", "top", '194px'],
                ["style", "opacity", '1']
            ],
            "${_SchematicRegTextCopy2}": [
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '639px'],
                ["style", "text-align", 'center'],
                ["style", "top", '379px']
            ],
            "${_FireExitngHandle_1-Left}": [
                ["style", "top", '116px'],
                ["style", "opacity", '0'],
                ["style", "left", '17px']
            ],
            "${_Bottle1}": [
                ["color", "background-color", 'rgba(114,114,114,1.00)'],
                ["style", "top", '484px'],
                ["style", "height", '69px'],
                ["style", "opacity", '1'],
                ["style", "left", '265px'],
                ["style", "width", '69px']
            ],
            "${_BlueBottle1}": [
                ["color", "background-color", 'rgba(0,131,202,1.00)'],
                ["style", "top", '484px'],
                ["style", "height", '69px'],
                ["style", "opacity", '1'],
                ["style", "left", '265px'],
                ["style", "width", '69px']
            ],
            "${_L_Dimmed4}": [
                ["style", "top", '188px'],
                ["style", "opacity", '0'],
                ["style", "left", '88px']
            ],
            "${_Caution_Button}": [
                ["style", "top", '554px'],
                ["style", "left", '1097px']
            ],
            "${_AFDLarge-displayWhite}": [
                ["style", "top", '80px'],
                ["style", "left", '31px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_AFDLarge-displayCyanCopy3}": [
                ["style", "top", '45px'],
                ["style", "left", '31px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_EICAS_Messages2}": [
                ["style", "top", '194px'],
                ["style", "opacity", '1']
            ],
            "${_FireExtingHandle_2-Left}": [
                ["style", "top", '117px'],
                ["style", "opacity", '0'],
                ["style", "left", '47px']
            ],
            "${_Discharge_Bottle2}": [
                ["style", "top", '412px'],
                ["style", "height", '143px'],
                ["style", "opacity", '0'],
                ["style", "left", '68px'],
                ["style", "width", '317px']
            ],
            "${_AFDLarge-displayWhite2Copy3}": [
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '18px'],
                ["style", "top", '81px'],
                ["style", "left", '31px'],
                ["style", "width", '131px']
            ],
            "${_EICAS_Messages3}": [
                ["style", "top", '194px'],
                ["style", "opacity", '1'],
                ["style", "left", '845px']
            ],
            "${_OpenValve_Break}": [
                ["style", "top", '539px'],
                ["style", "height", '36px'],
                ["style", "opacity", '0'],
                ["style", "left", '248px'],
                ["style", "width", '46px']
            ],
            "${_AFDLarge-displayCyanCopy}": [
                ["style", "top", '28px'],
                ["style", "left", '31px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_LeftEngine_Red}": [
                ["style", "top", '374px'],
                ["style", "height", '94px'],
                ["style", "opacity", '0'],
                ["style", "left", '39px'],
                ["style", "width", '60px']
            ],
            "${_AFDLarge-displayRedCopy13}": [
                ["style", "top", '10px'],
                ["style", "left", '31px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_AFDLarge-displayYellowCopy2}": [
                ["style", "top", '28px'],
                ["style", "left", '31px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_AFDLarge-displayCyanCopy2}": [
                ["style", "top", '45px'],
                ["style", "left", '31px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_RectangleCopy4}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '160px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '291px']
            ],
            "${_AFDLarge-displayWhiteCopy3}": [
                ["style", "top", '63px'],
                ["style", "left", '31px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_FireExtiguishingSchematic2}": [
                ["style", "top", '375px'],
                ["style", "height", '234px'],
                ["style", "left", '38px'],
                ["style", "width", '654px']
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '160px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '291px']
            ],
            "${_RectangleCopy2}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '160px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '291px']
            ],
            "${_AFDLarge-displayYellow}": [
                ["style", "top", '45px'],
                ["style", "left", '31px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_OpenValve_Break2}": [
                ["style", "top", '539px'],
                ["style", "height", '36px'],
                ["style", "opacity", '0'],
                ["style", "left", '370px'],
                ["style", "width", '46px']
            ],
            "${_SchematicRegTextCopy3}": [
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '344px'],
                ["style", "text-align", 'center'],
                ["style", "top", '617px']
            ],
            "${_AFDLarge-displayWhite2Copy2}": [
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '18px'],
                ["style", "top", '81px'],
                ["style", "left", '31px'],
                ["style", "width", '131px']
            ],
            "${_EICAS_Fire}": [
                ["style", "top", '112px'],
                ["transform", "scaleY", '1.1'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '1'],
                ["style", "left", '857px']
            ],
            "${_EICAS2}": [
                ["style", "top", '38px'],
                ["transform", "scaleY", '1.1'],
                ["style", "left", '858px'],
                ["transform", "scaleX", '1.1']
            ],
            "${_AFDLarge-displayRedCopy12}": [
                ["style", "top", '10px'],
                ["style", "left", '31px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_AFDLarge-displayYellow2}": [
                ["style", "top", '28px'],
                ["style", "left", '31px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_AFDLarge-displayWhite2Copy}": [
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '18px'],
                ["style", "top", '45px'],
                ["style", "left", '31px'],
                ["style", "width", '131px']
            ],
            "${_RectangleCopy3}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '160px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '291px']
            ],
            "${_EICAS_Messages4}": [
                ["style", "top", '194px']
            ],
            "${_AFDLarge-displayWhiteCopy2}": [
                ["style", "top", '63px'],
                ["style", "left", '31px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_CaptionTextCopy6}": [
                ["style", "top", '162px'],
                ["style", "left", '960px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_AFDLarge-displayWhite2}": [
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '18px'],
                ["style", "top", '97px'],
                ["style", "left", '31px'],
                ["style", "width", '131px']
            ],
            "${_Discharge_Bottle1}": [
                ["style", "top", '412px'],
                ["style", "height", '143px'],
                ["style", "opacity", '0'],
                ["style", "left", '68px'],
                ["style", "width", '198px']
            ],
            "${_CaptionTextCopy7}": [
                ["style", "top", '358px'],
                ["style", "left", '960px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '720px'],
                ["style", "max-width", '1920px'],
                ["style", "width", '1200px']
            ],
            "${_SchematicRegTextCopy4}": [
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '464px'],
                ["style", "left", '260px'],
                ["style", "text-align", 'center']
            ],
            "${_RedBottle2}": [
                ["color", "background-color", 'rgba(255,0,0,1.00)'],
                ["style", "top", '484px'],
                ["style", "height", '69px'],
                ["style", "opacity", '1'],
                ["style", "left", '387px'],
                ["style", "width", '69px']
            ],
            "${_MastWarningPanel2}": [
                ["style", "left", '697px'],
                ["style", "top", '396px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 25500,
            autoPlay: true,
            timeline: [
                { id: "eid301", tween: [ "style", "${_FireExtingHandle_Left}", "opacity", '1', { fromValue: '1'}], position: 5250, duration: 0 },
                { id: "eid299", tween: [ "style", "${_FireExtingHandle_Left}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 0 },
                { id: "eid339", tween: [ "style", "${_FireExtingHandle_Left}", "opacity", '1', { fromValue: '0'}], position: 14750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid357", tween: [ "style", "${_FireExtingHandle_Left}", "opacity", '0', { fromValue: '1'}], position: 16460, duration: 0, easing: "easeInOutQuad" },
                { id: "eid383", tween: [ "style", "${_EICAS_Messages3}", "opacity", '1', { fromValue: '1'}], position: 5250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid382", tween: [ "style", "${_EICAS_Messages3}", "opacity", '0', { fromValue: '1'}], position: 25500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid386", tween: [ "style", "${_EICAS_Fire}", "opacity", '1', { fromValue: '1'}], position: 5250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid385", tween: [ "style", "${_EICAS_Fire}", "opacity", '0', { fromValue: '1'}], position: 25500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid311", tween: [ "style", "${_OpenValve_Break}", "opacity", '1', { fromValue: '0'}], position: 5750, duration: 500, easing: "easeInOutQuad" },
                { id: "eid313", tween: [ "style", "${_OpenValve_Break}", "opacity", '0', { fromValue: '1'}], position: 6250, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid298", tween: [ "style", "${_FireExitngHandle_1-Left}", "opacity", '0', { fromValue: '0'}], position: 5250, duration: 0 },
                { id: "eid300", tween: [ "style", "${_FireExitngHandle_1-Left}", "opacity", '1', { fromValue: '0'}], position: 5750, duration: 0 },
                { id: "eid340", tween: [ "style", "${_FireExitngHandle_1-Left}", "opacity", '0', { fromValue: '1'}], position: 14750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid302", tween: [ "style", "${_LeftEngine_Red}", "opacity", '0', { fromValue: '0'}], position: 5250, duration: 0 },
                { id: "eid374", tween: [ "style", "${_LeftEngine_Red}", "opacity", '1', { fromValue: '0'}], position: 20321, duration: 929, easing: "easeInOutQuad" },
                { id: "eid378", tween: [ "style", "${_LeftEngine_Red}", "opacity", '0', { fromValue: '1'}], position: 23750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid358", tween: [ "style", "${_L_Dimmed4}", "opacity", '0', { fromValue: '0'}], position: 5250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid387", tween: [ "style", "${_L_Dimmed4}", "opacity", '1', { fromValue: '0'}], position: 25500, duration: 0, easing: "easeInOutQuad" },
                { id: "eid303", tween: [ "style", "${_LeftEngine_Blue}", "opacity", '0', { fromValue: '0'}], position: 5250, duration: 0 },
                { id: "eid338", tween: [ "style", "${_LeftEngine_Blue}", "opacity", '1', { fromValue: '0'}], position: 9684, duration: 1184, easing: "easeInOutQuad" },
                { id: "eid345", tween: [ "style", "${_LeftEngine_Blue}", "opacity", '0', { fromValue: '1'}], position: 12250, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid304", tween: [ "style", "${_Discharge_Bottle1}", "opacity", '0', { fromValue: '0'}], position: 5250, duration: 0 },
                { id: "eid335", tween: [ "style", "${_Discharge_Bottle1}", "opacity", '1', { fromValue: '0'}], position: 8816, duration: 1184, easing: "easeInOutQuad" },
                { id: "eid346", tween: [ "style", "${_Discharge_Bottle1}", "opacity", '0', { fromValue: '1'}], position: 12250, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid307", tween: [ "style", "${_BlueBottle1}", "opacity", '1', { fromValue: '1'}], position: 5250, duration: 0 },
                { id: "eid325", tween: [ "style", "${_BlueBottle1}", "opacity", '0', { fromValue: '1'}], position: 6250, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid305", tween: [ "style", "${_Discharge_Bottle2}", "opacity", '0', { fromValue: '0'}], position: 5250, duration: 0 },
                { id: "eid371", tween: [ "style", "${_Discharge_Bottle2}", "opacity", '1', { fromValue: '0'}], position: 19000, duration: 1321, easing: "easeInOutQuad" },
                { id: "eid377", tween: [ "style", "${_Discharge_Bottle2}", "opacity", '0', { fromValue: '1'}], position: 23750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid388", tween: [ "style", "${_OpenValve_Break2}", "opacity", '0', { fromValue: '0'}], position: 5250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid361", tween: [ "style", "${_OpenValve_Break2}", "opacity", '1', { fromValue: '0'}], position: 16460, duration: 1290, easing: "easeInOutQuad" },
                { id: "eid365", tween: [ "style", "${_OpenValve_Break2}", "opacity", '0', { fromValue: '1'}], position: 17750, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid348", tween: [ "style", "${_Ellipse2}", "opacity", '0', { fromValue: '0'}], position: 5250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid355", tween: [ "style", "${_Ellipse2}", "opacity", '1', { fromValue: '0'}], position: 16460, duration: 0, easing: "easeInOutQuad" },
                { id: "eid379", tween: [ "style", "${_Ellipse2}", "opacity", '0', { fromValue: '1'}], position: 19000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid329", tween: [ "style", "${_EICAS_Messages2}", "opacity", '1', { fromValue: '1'}], position: 5250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid375", tween: [ "style", "${_EICAS_Messages2}", "opacity", '0', { fromValue: '1'}], position: 22250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid390", tween: [ "style", "${_RedBottle2}", "opacity", '1', { fromValue: '1'}], position: 5250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid368", tween: [ "style", "${_RedBottle2}", "opacity", '0', { fromValue: '1'}], position: 17750, duration: 1250, easing: "easeInOutQuad" },
                { id: "eid308", tween: [ "style", "${_Bottle1}", "opacity", '1', { fromValue: '1'}], position: 5250, duration: 0 },
                { id: "eid332", tween: [ "style", "${_EICAS_Messages1}", "opacity", '1', { fromValue: '1'}], position: 5250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid331", tween: [ "style", "${_EICAS_Messages1}", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid328", tween: [ "style", "${_Ellipse1}", "opacity", '0', { fromValue: '0'}], position: 5250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid327", tween: [ "style", "${_Ellipse1}", "opacity", '1', { fromValue: '0'}], position: 5750, duration: 0, easing: "easeInOutQuad" },
                { id: "eid347", tween: [ "style", "${_Ellipse1}", "opacity", '0', { fromValue: '1'}], position: 7681, duration: 0, easing: "easeInOutQuad" },
                { id: "eid359", tween: [ "style", "${_FireExtingHandle_2-Left}", "opacity", '0', { fromValue: '0'}], position: 5250, duration: 0, easing: "easeInOutQuad" },
                { id: "eid362", tween: [ "style", "${_FireExtingHandle_2-Left}", "opacity", '1', { fromValue: '0'}], position: 16460, duration: 0, easing: "easeInOutQuad" },
                { id: "eid391", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_single_chime2}', [] ], ""], position: 7750 },
                { id: "eid392", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_single_chime2}', [] ], ""], position: 22250 }            ]
        }
    }
},
"MediumText_dRedAFD": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], [], ['100%', '100%']],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'AFDMedium-displayRed',
                    align: 'left',
                    text: 'overwrite me',
                    userClass: 'AFDMedium-displayRed',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '14px'],
                ["style", "width", '84px']
            ],
            "${_AFDMedium-displayRed}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Text_schematicRegular": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    type: 'text',
                    id: 'SchematicRegText',
                    text: 'Overwrite me',
                    align: 'left',
                    userClass: 'SchematicRegular'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_SchematicRegText}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '92px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"LargeText_dMagentaAFD": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], [], ['100%', '100%']],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'AFDLarge-displayMagenta',
                    align: 'left',
                    text: 'overwrite me',
                    userClass: 'AFDLarge-displayMagenta',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '108px']
            ],
            "${_AFDLarge-displayMagenta}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"MediumText_dGreenAFD": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], [], ['100%', '100%']],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'AFDMedium-displayGreen',
                    align: 'left',
                    text: 'overwrite me',
                    userClass: 'AFDMedium-displayGreen',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_AFDMedium-displayGreen}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '14px'],
                ["style", "width", '84px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Text_callout": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], [], ['100%', '100%']],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'CalloutText',
                    align: 'left',
                    text: 'Overwrite me',
                    userClass: 'Callout',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_CalloutText}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '99px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Text_auralWarning": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], [], ['100%', '100%']],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'AuralWarningText',
                    align: 'left',
                    text: 'Overwrite me',
                    userClass: 'AuralWarning',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_AuralWarningText}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '126px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"LargeText_dCyanAFD": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], [], ['100%', '100%']],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'AFDLarge-displayCyan',
                    align: 'left',
                    text: 'overwrite me',
                    userClass: 'AFDLarge-displayCyan',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '108px']
            ],
            "${_AFDLarge-displayCyan}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"LargeText_dGreyAFD": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], [], ['100%', '100%']],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'AFDLarge-displayGrey',
                    align: 'left',
                    text: 'overwrite me',
                    userClass: 'AFDLarge-displayGrey',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_AFDLarge-displayGrey}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '108px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"LargeText_WhiteAFD": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    type: 'text',
                    id: 'AFDLarge-white',
                    text: 'overwrite me',
                    align: 'left',
                    userClass: 'AFDLarge-white'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_AFDLarge-white}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '108px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"MediumText_dGreyAFD": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], [], ['100%', '100%']],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'AFDMedium-displayGrey',
                    align: 'left',
                    text: 'overwrite me',
                    userClass: 'AFDMedium-displayGrey',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_AFDMedium-displayGrey}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '14px'],
                ["style", "width", '84px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"LargeText_dGreenAFD": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], [], ['100%', '100%']],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'AFDLarge-displayGreen',
                    align: 'left',
                    text: 'overwrite me',
                    userClass: 'AFDLarge-displayGreen',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '108px']
            ],
            "${_AFDLarge-displayGreen}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"LargeText_dRedAFD": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    type: 'text',
                    id: 'AFDLarge-displayRed',
                    text: 'overwrite me',
                    align: 'left',
                    userClass: 'AFDLarge-displayRed'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_AFDLarge-displayRed}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '108px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"LargeText_dYellowAFD": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], [], ['100%', '100%']],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'AFDLarge-displayYellow',
                    align: 'left',
                    text: 'overwrite me',
                    userClass: 'AFDLarge-displayYellow',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_AFDLarge-displayYellow}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '108px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Text_schematicBold": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], [], ['100%', '100%']],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'SchematicBoldText',
                    align: 'left',
                    text: 'Overwrite me',
                    userClass: 'SchematicBold',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_SchematicBoldText}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '126px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"MediumText_dCyanAFD": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], [], ['100%', '100%']],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'AFDMedium-displayCyan',
                    align: 'left',
                    text: 'overwrite me',
                    userClass: 'AFDMedium-displayCyan',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_AFDMedium-displayCyan}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '14px'],
                ["style", "width", '84px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"MediumText_WhiteAFD": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], [], ['100%', '100%']],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'AFDMedium-white',
                    align: 'left',
                    text: 'overwrite me',
                    userClass: 'AFDMedium-white',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_AFDMedium-white}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '15px'],
                ["style", "width", '90px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Text_bracketedCallout": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], [], ['100%', '100%']],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'BracketedCalloutText',
                    align: 'left',
                    text: 'Overwrite me',
                    userClass: 'bracketedCallout',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_BracketedCalloutText}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '89px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"MediumText_dYellowAFD": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], [], ['100%', '100%']],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'AFDMedium-displayYellow',
                    align: 'left',
                    text: 'overwrite me',
                    userClass: 'AFDMedium-displayYellow',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_AFDMedium-displayYellow}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '14px'],
                ["style", "width", '84px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"MediumText_dMagentaAFD": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], [], ['100%', '100%']],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'AFDMedium-displayMagenta',
                    align: 'left',
                    text: 'overwrite me',
                    userClass: 'AFDMedium-displayMagenta',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '14px'],
                ["style", "width", '84px']
            ],
            "${_AFDMedium-displayMagenta}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Text_caption": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    type: 'text',
                    id: 'CaptionText',
                    text: 'Overwrite me',
                    align: 'left',
                    userClass: 'Caption'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_CaptionText}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '126px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Text_procedure": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], [], ['100%', '100%']],
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial', 24, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'SchematicRegTextCopy',
                    align: 'left',
                    text: 'Overwrite me in sentence case.',
                    userClass: 'Note-body',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '18px'],
                ["style", "width", '217px']
            ],
            "${_SchematicRegTextCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-235715816");
