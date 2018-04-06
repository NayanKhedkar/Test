/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'Arial': '<link rel=\"stylesheet\" type=\"text/css\" href=\"styles/textStyling.css\" />',
            'BATC_AFD_GOTHIC': '<link rel=\"stylesheet\" href=\"styles/textStyling.css\"type=\"text/css\"media=\"screen\"tiltle=\"\"charset=\"utf-8\"/>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'BackgroundCopy',
                            type: 'rect',
                            rect: ['390px', '10px', '435px', '660px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'MenuBackgroundCopy',
                            type: 'rect',
                            rect: ['390px', '11px', '435px', '24px', 'auto', 'auto'],
                            fill: ["rgba(0,2,70,1)"],
                            stroke: [2,"rgb(199, 199, 199)","none"]
                        },
                        {
                            id: 'Menu_MbuttonCopy',
                            type: 'image',
                            rect: ['391px', '12px', '22px', '21px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Menu_Mbutton.svg",'0px','0px']
                        },
                        {
                            id: 'Button_SymbolCopy',
                            type: 'image',
                            rect: ['743px', '12px', '74px', '21px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Button_Symbol.svg",'0px','0px']
                        },
                        {
                            id: 'Button_OVLYCopy',
                            type: 'image',
                            rect: ['582px', '12px', '60px', '21px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Button_OVLY.svg",'0px','0px']
                        },
                        {
                            id: 'ACTive_ToggleButton_SelectedCopy',
                            type: 'image',
                            rect: ['498px', '12px', '82px', '21px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ACTive_ToggleButton_Selected.svg",'0px','0px']
                        },
                        {
                            id: 'Menu_DropdownCopy',
                            type: 'group',
                            rect: ['414px', '12px', '83', '21', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Menu_dropdownCopy',
                                type: 'image',
                                rect: ['0px', '0px', '83px', '21px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_dropdown.svg",'0px','0px']
                            },
                            {
                                id: 'MAPCopy',
                                type: 'text',
                                rect: ['5px', '3px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Map</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [24, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            }]
                        },
                        {
                            id: 'NAVsource_datablockCopy',
                            type: 'group',
                            rect: ['393px', '585px', '71', '81', 'auto', 'auto'],
                            c: [
                            {
                                id: 'FMS_DataBoxCopy',
                                type: 'rect',
                                rect: ['0px', '0px', '73px', '80px', 'auto', 'auto'],
                                fill: ["rgba(0,2,70,1)"],
                                stroke: [2,"rgb(199, 199, 199)","none"]
                            },
                            {
                                id: 'FMS2Copy',
                                type: 'text',
                                rect: ['2px', '1px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​FMS2</p>",
                                align: "left",
                                userClass: "AFDLarge-displayMagenta",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,240,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'HDGCopy3',
                                type: 'text',
                                rect: ['2px', '36px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​DTK</p>",
                                align: "left",
                                userClass: "AFDMedium-displayGrey",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,240,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'TTGCopy',
                                type: 'text',
                                rect: ['2px', '51px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​TTG</p>",
                                align: "left",
                                userClass: "AFDMedium-displayGrey",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,240,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'NMCopy',
                                type: 'text',
                                rect: ['42px', '67px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​NM</p>",
                                align: "left",
                                userClass: "AFDMedium-displayGrey",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,240,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: '_500Copy',
                                type: 'text',
                                rect: ['2px', '17px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​MIDST</p>",
                                align: "left",
                                userClass: "AFDLarge-displayMagenta",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,240,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: '_315Copy',
                                type: 'text',
                                rect: ['auto', '35px', 'auto', 'auto', '19px', 'auto'],
                                text: "<p style=\"margin: 0px;\">​288</p>",
                                align: "right",
                                userClass: "AFDLarge-displayMagenta",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: '_34Copy',
                                type: 'text',
                                rect: ['auto', '50px', 'auto', 'auto', '3px', 'auto'],
                                text: "<p style=\"margin: 0px;\">0.5</p>",
                                align: "right",
                                userClass: "AFDLarge-displayMagenta",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: '_1_2Copy',
                                type: 'text',
                                rect: ['auto', '65px', 'auto', 'auto', '32px', 'auto'],
                                text: "<p style=\"margin: 0px;\">​3.7</p>",
                                align: "right",
                                userClass: "AFDLarge-displayMagenta",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            }]
                        },
                        {
                            id: 'Weather_DatablockCopy',
                            type: 'group',
                            rect: ['719px', '614px', '102', '51', 'auto', 'auto'],
                            c: [
                            {
                                id: 'WXR_DataBoxCopy',
                                type: 'rect',
                                rect: ['0px', '0px', '102px', '51px', 'auto', 'auto'],
                                fill: ["rgba(0,2,70,1)"],
                                stroke: [2,"rgb(199, 199, 199)","none"]
                            },
                            {
                                id: 'TFCCopy',
                                type: 'text',
                                rect: ['6px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​TFC/</p>",
                                align: "left",
                                userClass: "AFDMedium-white",
                                font: ['BATC_AFD_GOTHIC', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'WX_LXCopy',
                                type: 'text',
                                rect: ['58px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​WX/ LX</p>",
                                align: "left",
                                userClass: "AFDMedium-white",
                                font: ['BATC_AFD_GOTHIC', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            }]
                        },
                        {
                            id: 'TCAS_DatablockCopy',
                            type: 'group',
                            rect: ['748px', '550px', '71', '57', 'auto', 'auto'],
                            c: [
                            {
                                id: 'TCAS_DataBoxCopy',
                                type: 'rect',
                                rect: ['-19px', '-5px', '92px', '67px', 'auto', 'auto'],
                                fill: ["rgba(0,2,70,1)"],
                                stroke: [2,"rgb(199, 199, 199)","none"]
                            },
                            {
                                id: 'TA_ONLYCopy',
                                type: 'text',
                                rect: ['auto', '0px', 'auto', 'auto', '0px', 'auto'],
                                text: "<p style=\"margin: 0px; line-height: 17px;\">​TCAS FAIL</p>",
                                align: "right",
                                userClass: "AFDLarge-displayYellow",
                                font: ['BATC_AFD_GOTHIC', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"],
                                textStyle: ["", "", "14px", "", ""]
                            }]
                        },
                        {
                            id: 'bckgrndHSIFullScale_Clipping_DoNotTouchLayer_UseInsideCopy',
                            type: 'group',
                            rect: ['398px', '203px', '420', '420', 'auto', 'auto'],
                            clip: 'rect(0px 420px 119.8330078125px 0px)',
                            c: [
                            {
                                id: 'HSI_FullScaleCopy',
                                type: 'image',
                                rect: ['0px', '0px', '420px', '420px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"HSI_FullScale.svg",'0px','0px'],
                                transform: [[],['27']]
                            },
                            {
                                id: 'Digits_GroupCopy',
                                type: 'group',
                                rect: ['7', '9', '406px', '406px', 'auto', 'auto'],
                                transform: [[],['27']],
                                c: [
                                {
                                    id: '_33Copy',
                                    type: 'text',
                                    rect: ['247px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; line-height: 18px;\">​33</p>",
                                    align: "left",
                                    font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                    textStyle: ["", "", "", "", "uppercase"],
                                    transform: [[],['-27']]
                                },
                                {
                                    id: 'NCopy',
                                    type: 'text',
                                    rect: ['341px', '53px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; line-height: 18px;\">​N</p>",
                                    align: "left",
                                    font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                    textStyle: ["", "", "", "", "uppercase"],
                                    transform: [[],['-27']]
                                },
                                {
                                    id: '_3Copy',
                                    type: 'text',
                                    rect: ['384px', '142px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; line-height: 18px; text-align: right;\">​ 3</p>",
                                    align: "right",
                                    font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                    textStyle: ["", "", "", "", "uppercase"],
                                    transform: [[],['-27']]
                                },
                                {
                                    id: '_6Copy',
                                    type: 'text',
                                    rect: ['386px', '244px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; line-height: 18px; text-align: right;\">​ 6</p>",
                                    align: "right",
                                    font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                    textStyle: ["", "", "", "", "uppercase"],
                                    transform: [[],['-27']]
                                },
                                {
                                    id: 'ECopy',
                                    type: 'text',
                                    rect: ['340px', '335px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; line-height: 18px;\">​E</p>",
                                    align: "left",
                                    font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                    textStyle: ["", "", "", "", "uppercase"],
                                    transform: [[],['-27']]
                                },
                                {
                                    id: '_12Copy',
                                    type: 'text',
                                    rect: ['246px', '388px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; line-height: 18px;\">​12</p>",
                                    align: "left",
                                    font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                    textStyle: ["", "", "", "", "uppercase"],
                                    transform: [[],['-27']]
                                },
                                {
                                    id: '_15Copy',
                                    type: 'text',
                                    rect: ['142px', '387px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; line-height: 18px;\">​15</p>",
                                    align: "left",
                                    font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                    textStyle: ["", "", "", "", "uppercase"],
                                    transform: [[],['-27']]
                                },
                                {
                                    id: 'SCopy',
                                    type: 'text',
                                    rect: ['59px', '336px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; line-height: 18px;\">​S</p>",
                                    align: "left",
                                    font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                    textStyle: ["", "", "", "", "uppercase"],
                                    transform: [[],['-27']]
                                },
                                {
                                    id: '_21Copy',
                                    type: 'text',
                                    rect: ['1px', '245px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; line-height: 18px;\">​21</p>",
                                    align: "left",
                                    font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                    textStyle: ["", "", "", "", "uppercase"],
                                    transform: [[],['-27']]
                                },
                                {
                                    id: '_24Copy',
                                    type: 'text',
                                    rect: ['0px', '139px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; line-height: 18px;\">​24</p>",
                                    align: "left",
                                    font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                    textStyle: ["", "", "", "", "uppercase"],
                                    transform: [[],['-27']]
                                },
                                {
                                    id: 'WCopy',
                                    type: 'text',
                                    rect: ['59px', '52px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; line-height: 18px;\">​W</p>",
                                    align: "left",
                                    font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                    textStyle: ["", "", "", "", "uppercase"],
                                    transform: [[],['-27']]
                                },
                                {
                                    id: '_30Copy',
                                    type: 'text',
                                    rect: ['143px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; line-height: 18px;\">​30</p>",
                                    align: "left",
                                    font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                    textStyle: ["", "", "", "", "uppercase"],
                                    transform: [[],['-27']]
                                }]
                            }]
                        },
                        {
                            id: 'Range3DigitsCopy',
                            type: 'group',
                            rect: ['429px', '323px', '42', '22', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Range_Box3DigitsCopy',
                                type: 'rect',
                                rect: ['0px', '0px', '46px', '18px', 'auto', 'auto'],
                                borderRadius: ["4px", "4px", "4px", "4px 4px"],
                                fill: ["rgba(0,2,70,1.00)"],
                                stroke: [2,"rgba(199,199,199,1.00)","solid"]
                            },
                            {
                                id: '_200Copy',
                                type: 'text',
                                rect: ['20px', '3px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; line-height: 18px;\">​100</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'ElevatorSymbolCopy',
                                type: 'image',
                                rect: ['3px', '2px', '16px', '18px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"ElevatorSymbol.svg",'0px','0px']
                            }]
                        },
                        {
                            id: 'HSI_midCircleCopy',
                            type: 'image',
                            rect: ['398px', '203px', '420px', '420px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HSI_midCircle.svg",'0px','0px']
                        },
                        {
                            id: 'LineCopy2',
                            type: 'rect',
                            rect: ['auto', 'auto', '2px', '393px', '591px', '251px'],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(199, 199, 199)","none"]
                        },
                        {
                            id: 'WaypointtextCopy',
                            type: 'text',
                            rect: ['620px', '434px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​PSB</p>",
                            align: "left",
                            font: ['BATC_AFD_GOTHIC', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "14px", "", "uppercase"]
                        },
                        {
                            id: 'WaypointTextCopy11',
                            type: 'text',
                            rect: ['620px', '396px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Misdt</p><p style=\"margin: 0px;\">​ 17:11</p>",
                            align: "left",
                            font: ['BATC_AFD_GOTHIC', [14, "px"], "rgba(255,0,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "12px", "", "uppercase"]
                        },
                        {
                            id: 'WaypointTextCopy10',
                            type: 'text',
                            rect: ['620px', '262px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">TYSON</p><p style=\"margin: 0px;\">​ 17:21</p>",
                            align: "left",
                            font: ['BATC_AFD_GOTHIC', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "12px", "", "uppercase"]
                        },
                        {
                            id: 'WaypointTextCopy9',
                            type: 'text',
                            rect: ['620px', '238px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​HAGUD</p><p style=\"margin: 0px;\">​ 17:23</p>",
                            align: "left",
                            font: ['BATC_AFD_GOTHIC', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "12px", "", "uppercase"]
                        },
                        {
                            id: 'WaypointTextCopy8',
                            type: 'text',
                            rect: ['620px', '138px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​CAncr</p><p style=\"margin: 0px;\">​ 17:23</p>",
                            align: "left",
                            font: ['BATC_AFD_GOTHIC', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "12px", "", "uppercase"]
                        },
                        {
                            id: 'WaypointTextCopy7',
                            type: 'text',
                            rect: ['620px', '88px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">DJB</p><p style=\"margin: 0px;\">​ 17:33</p>",
                            align: "left",
                            font: ['BATC_AFD_GOTHIC', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "12px", "", "uppercase"]
                        },
                        {
                            id: 'WaypointTextCopy6',
                            type: 'text',
                            rect: ['620px', '55px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">JERRI</p><p style=\"margin: 0px;\">​ 17:35</p>",
                            align: "left",
                            font: ['BATC_AFD_GOTHIC', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "12px", "", "uppercase"]
                        },
                        {
                            id: 'Waypoint_magentaCopy',
                            type: 'image',
                            rect: ['597px', '391px', '22px', '22px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Waypoint_magenta.svg",'0px','0px']
                        },
                        {
                            id: 'WaypointCopy11',
                            type: 'image',
                            rect: ['597px', '430px', '22px', '22px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Waypoint.svg",'0px','0px']
                        },
                        {
                            id: 'WaypointCopy10',
                            type: 'image',
                            rect: ['597px', '233px', '22px', '22px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Waypoint.svg",'0px','0px']
                        },
                        {
                            id: 'WaypointCopy9',
                            type: 'image',
                            rect: ['597px', '256px', '22px', '22px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Waypoint.svg",'0px','0px']
                        },
                        {
                            id: 'WaypointCopy8',
                            type: 'image',
                            rect: ['597px', '83px', '22px', '22px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Waypoint.svg",'0px','0px']
                        },
                        {
                            id: 'WaypointCopy7',
                            type: 'image',
                            rect: ['597px', '133px', '22px', '22px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Waypoint.svg",'0px','0px']
                        },
                        {
                            id: 'WaypointCopy6',
                            type: 'image',
                            rect: ['597px', '50px', '22px', '22px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Waypoint.svg",'0px','0px']
                        },
                        {
                            id: 'Heading_ReadoutCopy',
                            type: 'group',
                            rect: ['587px', '194px', '42', '33', 'auto', 'auto'],
                            c: [
                            {
                                id: 'HSI_HeadingPointerCopy',
                                type: 'image',
                                rect: ['0px', '0px', '42px', '33px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"HSI_HeadingPointer.svg",'0px','0px']
                            },
                            {
                                id: 'Heading_ReadingCopy',
                                type: 'text',
                                rect: ['5px', '3px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(0, 254, 0);\">288</span></p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [22, "px"], "rgba(6,202,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "22px", "", "uppercase"]
                            }]
                        },
                        {
                            id: 'HSI_SymbolsCopy',
                            type: 'group',
                            rect: ['405px', '212px', '400', '405', 'auto', 'auto'],
                            c: [
                            {
                                id: 'HeadingBugCopy',
                                type: 'image',
                                rect: ['-7px', '-9px', '420px', '420px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"HeadingBug.svg",'0px','0px'],
                                transform: [[],['11']]
                            },
                            {
                                id: 'Drift_BugCopy',
                                type: 'image',
                                rect: ['-7px', '-9px', '420px', '420px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Drift_Bug.svg",'0px','0px']
                            }]
                        },
                        {
                            id: 'HDG_ReadoutCopy',
                            type: 'group',
                            rect: ['502px', '197px', '59', '18', 'auto', 'auto'],
                            c: [
                            {
                                id: 'HDG_BoxCopy',
                                type: 'rect',
                                rect: ['0px', '0px', '59px', '18px', 'auto', 'auto'],
                                fill: ["rgba(0,2,70,1)"],
                                stroke: [2,"rgb(199, 199, 199)","none"]
                            },
                            {
                                id: 'HDGCopy2',
                                type: 'text',
                                rect: ['3px', '4px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​HDG</p>",
                                align: "left",
                                userClass: "AFDMedium-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'HDG_ReadingCopy',
                                type: 'text',
                                rect: ['29px', '2px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​299</p>",
                                align: "left",
                                userClass: "AFDLarge-displayCyan",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            }]
                        },
                        {
                            id: 'AircraftSymbolCopy',
                            type: 'image',
                            rect: ['auto', 'auto', '30px', '34px', '577px', '288px'],
                            fill: ["rgba(0,0,0,0)",im+"AircraftSymbol.svg",'0px','0px']
                        },
                        {
                            id: 'SymbolControl_DropDownMenu',
                            type: 'group',
                            rect: ['633px', '36px', '185', '617', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'DropdownMenu_Background',
                                type: 'rect',
                                rect: ['0px', '0px', '181px', '613px', 'auto', 'auto'],
                                borderRadius: ["0px", "0px", "0px", "0px 0px"],
                                fill: ["rgba(51,51,51,1.00)"],
                                stroke: [2,"rgb(199, 199, 199)","solid"]
                            },
                            {
                                id: 'TFR_REPORTS',
                                type: 'text',
                                rect: ['34px', '595px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; font-family: BATC_AFD_GOTHIC; font-weight: 400; font-style: normal; text-decoration: none; font-size: 18px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: uppercase; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 16px;\">TFR REPORTS ...</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'TFR',
                                type: 'text',
                                rect: ['34px', '570px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​TFR</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'SUA',
                                type: 'text',
                                rect: ['34px', '546px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">SUA</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'CRLD_AIRSPACE',
                                type: 'text',
                                rect: ['34px', '521px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">CRLD AIRSPACE</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'CITIES',
                                type: 'text',
                                rect: ['34px', '497px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">CITIES</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'OBSTACLES',
                                type: 'text',
                                rect: ['34px', '473px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; font-family: BATC_AFD_GOTHIC; font-weight: 400; font-style: normal; text-decoration: none; font-size: 18px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: uppercase; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 16px;\">OBSTACLES</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'SEQ_FPLNS',
                                type: 'text',
                                rect: ['34px', '448px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​SEQ FPLNS</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'ALTN_FPLN',
                                type: 'text',
                                rect: ['34px', '424px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">ALTN FPLN</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'MISSED_APPR',
                                type: 'text',
                                rect: ['34px', '399px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">MISSED APPR</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'RNG_ALT_SEL',
                                type: 'text',
                                rect: ['34px', '375px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​RNG: ALT SEL</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'IRS_POS',
                                type: 'text',
                                rect: ['34px', '351px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; font-family: BATC_AFD_GOTHIC; font-weight: 400; font-style: normal; text-decoration: none; font-size: 18px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: uppercase; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 16px;\">IRS POS</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'GNSS_POS',
                                type: 'text',
                                rect: ['34px', '326px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​GNSS POS</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'ALTITUDE',
                                type: 'text',
                                rect: ['34px', '302px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">ALTITUDE</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'SPEED',
                                type: 'text',
                                rect: ['34px', '277px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">SPEED</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'ETA',
                                type: 'text',
                                rect: ['34px', '253px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​ETA</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'ETA_selected',
                                type: 'text',
                                rect: ['34px', '253px', 'auto', 'auto', 'auto', 'auto'],
                                opacity: '1',
                                text: "<p style=\"margin: 0px;\">​ETA</p>",
                                align: "left",
                                userClass: "AFDLarge-displayCyan",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'LO_AIRWAYS',
                                type: 'text',
                                rect: ['34px', '229px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; font-family: BATC_AFD_GOTHIC; font-weight: 400; font-style: normal; text-decoration: none; font-size: 18px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: uppercase; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 16px;\">LO AIRWAYS</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'HI_AIRWAYS',
                                type: 'text',
                                rect: ['34px', '204px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​HI AIRWAYS</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'INTERSECTIONS',
                                type: 'text',
                                rect: ['34px', '180px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​INTERSECTIONS</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'TERM_WAYPOINTS_Selected',
                                type: 'text',
                                rect: ['34px', '155px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">term waypoints</p>",
                                align: "left",
                                userClass: "AFDLarge-displayCyan",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'TERM_WAYPOINTS',
                                type: 'text',
                                rect: ['34px', '155px', 'auto', 'auto', 'auto', 'auto'],
                                opacity: '1',
                                text: "<p style=\"margin: 0px;\">term waypoints</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'NDBS',
                                type: 'text',
                                rect: ['35px', '132px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​NDBS</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'LO_NAVAIDS',
                                type: 'text',
                                rect: ['35px', '108px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; font-family: BATC_AFD_GOTHIC; font-weight: 400; font-style: normal; text-decoration: none; font-size: 18px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: uppercase; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 16px;\">LO NAVAIDS</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'HI_NAVAIDS',
                                type: 'text',
                                rect: ['35px', '83px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​HI NAVAIDS</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'NEAREST_ARPTS',
                                type: 'text',
                                rect: ['35px', '59px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​NEAREST ARPTS</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'AIRPORTS',
                                type: 'text',
                                rect: ['35px', '34px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">AIRPORTS</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'POLITICAL',
                                type: 'text',
                                rect: ['35px', '10px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​POLITICAL</p>",
                                align: "left",
                                userClass: "AFDLarge-white",
                                font: ['BATC_AFD_GOTHIC', [18, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "uppercase"]
                            },
                            {
                                id: 'Menu_CheckboxOn3',
                                type: 'image',
                                rect: ['9px', '154px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOn.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOff2',
                                type: 'image',
                                rect: ['9px', '9px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOff2Copy',
                                type: 'image',
                                rect: ['9px', '252px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy21',
                                type: 'image',
                                rect: ['9px', '33px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy20',
                                type: 'image',
                                rect: ['9px', '58px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy19',
                                type: 'image',
                                rect: ['9px', '82px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy18',
                                type: 'image',
                                rect: ['9px', '107px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy17',
                                type: 'image',
                                rect: ['9px', '131px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy15',
                                type: 'image',
                                rect: ['9px', '179px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy14',
                                type: 'image',
                                rect: ['9px', '203px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy13',
                                type: 'image',
                                rect: ['9px', '228px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy12',
                                type: 'image',
                                rect: ['9px', '276px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy11',
                                type: 'image',
                                rect: ['9px', '301px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy10',
                                type: 'image',
                                rect: ['9px', '325px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy9',
                                type: 'image',
                                rect: ['9px', '350px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy8',
                                type: 'image',
                                rect: ['9px', '374px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy7',
                                type: 'image',
                                rect: ['9px', '398px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy6',
                                type: 'image',
                                rect: ['9px', '423px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy5',
                                type: 'image',
                                rect: ['9px', '447px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy4',
                                type: 'image',
                                rect: ['9px', '472px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy3',
                                type: 'image',
                                rect: ['9px', '496px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy2',
                                type: 'image',
                                rect: ['9px', '520px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOffCopy',
                                type: 'image',
                                rect: ['9px', '545px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOff',
                                type: 'image',
                                rect: ['9px', '569px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOn_ETA',
                                type: 'image',
                                rect: ['9px', '252px', '16px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOn.svg",'0px','0px']
                            },
                            {
                                id: 'Menu_CheckboxOff_TemPoints',
                                type: 'image',
                                rect: ['9px', '154px', '16px', '16px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"Menu_CheckboxOff.svg",'0px','0px']
                            }]
                        },
                        {
                            id: 'Button_Symbol_Selected',
                            type: 'image',
                            rect: ['743px', '12px', '74px', '21px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Button_Symbol_Selected.svg",'0px','0px']
                        },
                        {
                            id: 'FocusIndicator',
                            type: 'rect',
                            rect: ['741px', '10px', '74px', '21px', 'auto', 'auto'],
                            borderRadius: ["4px", "4px", "4px", "4px 4px"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [2,"rgba(6,202,255,1.00)","solid"]
                        },
                        {
                            id: 'FocusIndicator2',
                            type: 'rect',
                            rect: ['636px', '186px', '175px', '21px', 'auto', 'auto'],
                            borderRadius: ["4px", "4px", "4px", "4px 4px"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [2,"rgba(6,202,255,1.00)","solid"]
                        },
                        {
                            id: 'PilotCursor',
                            type: 'image',
                            rect: ['674px', '160px', '76px', '61px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"PilotCursor.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1200px', '680px', 'auto', 'auto'],
                            sizeRange: ['','1920px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 3250,
                    autoPlay: false,
                    labels: {
                        "//Stop_forPlaybarAniamtion": 0
                    },
                    data: [
                        [
                            "eid36",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TERM_WAYPOINTS}",
                            '1',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            3250,
                            0,
                            "linear",
                            "${TERM_WAYPOINTS}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Button_Symbol_Selected}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid13",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${Button_Symbol_Selected}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid5",
                            "left",
                            375,
                            625,
                            "linear",
                            "${PilotCursor}",
                            '681px',
                            '770px'
                        ],
                        [
                            "eid20",
                            "left",
                            1750,
                            750,
                            "linear",
                            "${PilotCursor}",
                            '770px',
                            '674px'
                        ],
                        [
                            "eid21",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${FocusIndicator2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid28",
                            "opacity",
                            2750,
                            0,
                            "linear",
                            "${FocusIndicator2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${FocusIndicator}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12",
                            "opacity",
                            1500,
                            0,
                            "linear",
                            "${FocusIndicator}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${FocusIndicator}",
                            '1',
                            '0'
                        ],
                        [
                            "eid6",
                            "top",
                            375,
                            625,
                            "linear",
                            "${PilotCursor}",
                            '53px',
                            '-16px'
                        ],
                        [
                            "eid19",
                            "top",
                            1750,
                            750,
                            "linear",
                            "${PilotCursor}",
                            '-16px',
                            '160px'
                        ],
                        [
                            "eid25",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${FocusIndicator2}",
                            '186px',
                            '186px'
                        ],
                        [
                            "eid37",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Menu_CheckboxOff_TemPoints}",
                            '1',
                            '1'
                        ],
                        [
                            "eid30",
                            "opacity",
                            3250,
                            0,
                            "linear",
                            "${Menu_CheckboxOff_TemPoints}",
                            '1',
                            '0'
                        ],
                        [
                            "eid15",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${SymbolControl_DropDownMenu}",
                            '0',
                            '0'
                        ],
                        [
                            "eid14",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${SymbolControl_DropDownMenu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "left",
                            2500,
                            0,
                            "linear",
                            "${FocusIndicator2}",
                            '636px',
                            '636px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Playbar_Example_edgeActions.js");
})("EDGE-579717180");
