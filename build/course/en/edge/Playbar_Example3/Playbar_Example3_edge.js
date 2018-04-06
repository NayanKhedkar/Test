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
                            id: 'ELT_panel',
                            type: 'image',
                            rect: ['340px', '76px', '519px', '205px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"ELT_panel.svg",'0px','0px']
                        },
                        {
                            id: 'hexShapeKnob_wText_right30deg',
                            type: 'image',
                            rect: ['700px', '165px', '126px', '109px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"hexShapeKnob_wText_right30deg.svg",'0px','0px']
                        },
                        {
                            id: 'hexShapeKnob_wText_top',
                            type: 'image',
                            rect: ['700px', '165px', '126px', '109px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"hexShapeKnob_wText_top.svg",'0px','0px']
                        },
                        {
                            id: 'PointingChevron_Right',
                            type: 'image',
                            rect: ['677px', '150px', '45px', '45px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"PointingChevron_Right.svg",'0px','0px']
                        },
                        {
                            id: 'left_ControlTuning',
                            type: 'group',
                            rect: ['286px', '354px', '628', '306', 'auto', 'auto'],
                            clip: 'rect(0px 628.75px 306px 0.4169921875px)',
                            c: [
                            {
                                id: 'controlTuningPanel',
                                type: 'image',
                                rect: ['0px', '0px', '628px', '295px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"controlTuningPanel.svg",'0px','0px']
                            },
                            {
                                id: 'right_BaroSpeedAlt_rotatingKnob_wShadow',
                                type: 'image',
                                rect: ['52px', '201px', '105px', '105px', 'auto', 'auto'],
                                clip: 'rect(0px 105px 92px 0px)',
                                fill: ["rgba(0,0,0,0)",im+"right_BaroSpeedAlt_rotatingKnob_wShadow.svg",'0px','0px']
                            },
                            {
                                id: 'Baro_rotatingKnob_topText',
                                type: 'image',
                                rect: ['52px', '201px', '105px', '105px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Baro_rotatingKnob_topText.svg",'0px','0px']
                            },
                            {
                                id: 'BRT_rotatingKnob_wShadow',
                                type: 'image',
                                rect: ['505px', '16px', '42px', '48px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"BRT_rotatingKnob_wShadow.svg",'0px','0px']
                            },
                            {
                                id: 'TuneData_rotatingKnob_wShadow',
                                type: 'image',
                                rect: ['494px', '209px', '97px', '86px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"TuneData_rotatingKnob_wShadow.svg",'0px','0px']
                            },
                            {
                                id: 'controlTuning_blackScreen',
                                type: 'image',
                                rect: ['231px', '28px', '238px', '238px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"controlTuning_blackScreen.svg",'0px','0px']
                            }]
                        },
                        {
                            id: 'UppercaseText',
                            type: 'text',
                            rect: ['573px', '652px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; font-family: Arial; font-weight: bold; font-style: normal; text-decoration: none; font-size: 16px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: uppercase; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 16px;\">CTP 2</p>",
                            align: "left",
                            userClass: "Caption",
                            font: ['Arial', [24, ""], "rgba(0,0,0,1)", "bold", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'CTP_defaultTopPage',
                            type: 'group',
                            rect: ['517px', '383px', '238', '238', 'auto', 'auto'],
                            c: [
                            {
                                id: 'controlTuning_blackScreen2',
                                type: 'image',
                                rect: ['0px', '0px', '238px', '238px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"controlTuning_blackScreen3.svg",'0px','0px']
                            },
                            {
                                id: 'whiteBorderBackgroundCopy2',
                                type: 'rect',
                                rect: ['7px', '21px', '221px', '42px', 'auto', 'auto'],
                                borderRadius: ["1px", "1px", "1px", "1px 1px"],
                                fill: ["rgba(0,0,0,1.00)"],
                                stroke: [1,"rgba(255,255,255,1.00)","solid"]
                            },
                            {
                                id: 'blackBackgroundCopy2',
                                type: 'rect',
                                rect: ['100px', '14px', '38px', '14px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [1,"rgb(255, 255, 255)","none"]
                            },
                            {
                                id: 'VHF2_header',
                                type: 'text',
                                rect: ['105px', '14px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​VHF2</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [14, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'cyanHighlightBox',
                                type: 'rect',
                                rect: ['147px', '46px', '12px', '10px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [1,"rgba(6,202,255,1.00)","solid"]
                            },
                            {
                                id: 'VHF2_largeTextCopy4',
                                type: 'text',
                                rect: ['64px', '27px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-family: BATC_AFD_GOTHIC;\">​700</span></p>",
                                font: ['BATC_AFD_GOTHIC', [20, "px"], "rgba(0,254,0,1.00)", "normal", "none", "", "break-word", "nowrap"]
                            },
                            {
                                id: 'VHF2_largeTextCopy3',
                                type: 'text',
                                rect: ['auto', '27px', 'auto', 'auto', '177px', 'auto'],
                                text: "<p style=\"margin: 0px;\">.</p>",
                                font: ['BATC_AFD_GOTHIC', [20, "px"], "rgba(0,254,0,1.00)", "normal", "none", "", "break-word", "nowrap"]
                            },
                            {
                                id: 'VHF2_largeTextCopy2',
                                type: 'text',
                                rect: ['auto', '27px', 'auto', 'auto', '190px', 'auto'],
                                text: "<p style=\"margin: 0px;\">133​</p>",
                                font: ['BATC_AFD_GOTHIC', [20, "px"], "rgba(0,254,0,1.00)", "normal", "none", "", "break-word", "nowrap"]
                            },
                            {
                                id: 'VHF2_largeText2',
                                type: 'text',
                                rect: ['auto', '27px', 'auto', 'auto', '19px', 'auto'],
                                text: "<p style=\"margin: 0px;\">​900</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [20, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'VHF2_largeTextCopy',
                                type: 'text',
                                rect: ['auto', '27px', 'auto', 'auto', '56px', 'auto'],
                                text: "<p style=\"margin: 0px;\">.</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [20, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'VHF2_largeText',
                                type: 'text',
                                rect: ['auto', '27px', 'auto', 'auto', '68px', 'auto'],
                                text: "<p style=\"margin: 0px;\">121</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [20, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'VHF2_smallText4',
                                type: 'text',
                                rect: ['25px', '46px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​17</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [12, "px"], "rgba(6,202,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'VHF2_smallTextCopy4',
                                type: 'text',
                                rect: ['auto', '46px', 'auto', 'auto', '171px', 'auto'],
                                text: "<p style=\"margin: 0px;\">​SQ</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [12, "px"], "rgba(6,202,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'VHF2_smallTextCopy3',
                                type: 'text',
                                rect: ['76px', '46px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​OFF</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [12, "px"], "rgba(6,202,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'VHF2_smallTextCopy2',
                                type: 'text',
                                rect: ['auto', '46px', 'auto', 'auto', '79px', 'auto'],
                                text: "<p style=\"margin: 0px;\">​4</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [12, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'VHF2_smallTextCopy',
                                type: 'text',
                                rect: ['auto', '46px', 'auto', 'auto', '45px', 'auto'],
                                text: "<p style=\"margin: 0px;\">​25</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [12, "px"], "rgba(6,202,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'VHF2_smallText',
                                type: 'text',
                                rect: ['197px', '46px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​SEL</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [12, "px"], "rgba(6,202,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'whiteBorderBackgroundCopy',
                                type: 'rect',
                                rect: ['7px', '74px', '221px', '42px', 'auto', 'auto'],
                                borderRadius: ["1px", "1px", "1px", "1px 1px"],
                                fill: ["rgba(0,0,0,1.00)"],
                                stroke: [1,"rgba(255,255,255,1.00)","solid"]
                            },
                            {
                                id: 'blackBackgroundCopy',
                                type: 'rect',
                                rect: ['100px', '70px', '38px', '14px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [1,"rgb(255, 255, 255)","none"]
                            },
                            {
                                id: 'NAV2_header',
                                type: 'text',
                                rect: ['105px', '68px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">NAV2</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [14, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'whiteHighlightBox',
                                type: 'rect',
                                rect: ['126px', '80px', '93px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [1,"rgba(255,255,255,1.00)","solid"]
                            },
                            {
                                id: 'NAV2_largeText3Copy2',
                                type: 'text',
                                rect: ['auto', '79px', 'auto', 'auto', '189px', 'auto'],
                                text: "<p style=\"margin: 0px;\">​115</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [20, "px"], "rgba(0,254,0,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'NAV2_largeText3Copy',
                                type: 'text',
                                rect: ['64px', '79px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">80</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [20, "px"], "rgba(0,254,0,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'NAV2_largeText3',
                                type: 'text',
                                rect: ['auto', '79px', 'auto', 'auto', '175px', 'auto'],
                                text: "<p style=\"margin: 0px;\">.</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [20, "px"], "rgba(0,254,0,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'NAV2_largeText5Copy2',
                                type: 'text',
                                rect: ['auto', '79px', 'auto', 'auto', '56px', 'auto'],
                                text: "<p style=\"margin: 0px;\">​110</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [20, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'NAV2_largeText5Copy',
                                type: 'text',
                                rect: ['197px', '79px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​50</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [20, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'NAV2_largeText5',
                                type: 'text',
                                rect: ['auto', '79px', 'auto', 'auto', '43px', 'auto'],
                                text: "<p style=\"margin: 0px;\">.</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [20, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'whiteBorderBackground',
                                type: 'rect',
                                rect: ['7px', '126px', '221px', '56px', 'auto', 'auto'],
                                borderRadius: ["1px", "1px", "1px", "1px 1px"],
                                fill: ["rgba(0,0,0,1.00)"],
                                stroke: [1,"rgba(255,255,255,1.00)","solid"]
                            },
                            {
                                id: 'blackBackground',
                                type: 'rect',
                                rect: ['85px', '120px', '67px', '16px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,1)"],
                                stroke: [1,"rgb(255, 255, 255)","none"]
                            },
                            {
                                id: 'ATC_TCAS_header',
                                type: 'text',
                                rect: ['91px', '120px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">ATC/TCAS</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [14, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'ATC_TCAS_largeText3',
                                type: 'text',
                                rect: ['auto', '133px', 'auto', 'auto', '178px', 'auto'],
                                text: "<p style=\"margin: 0px;\">1200</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [20, "px"], "rgba(0,254,0,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'ATC_TCAS_smallText6Copy',
                                type: 'text',
                                rect: ['auto', '165px', 'auto', 'auto', '180px', 'auto'],
                                text: "<p style=\"margin: 0px;\">​N45132</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [12, "px"], "rgba(0,254,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'ATC_TCAS_smallText6',
                                type: 'text',
                                rect: ['auto', '153px', 'auto', 'auto', '180px', 'auto'],
                                text: "<p style=\"margin: 0px;\">​N45132</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [12, "px"], "rgba(0,254,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'ATC_TCAS_largeText5Copy',
                                type: 'text',
                                rect: ['auto', '134px', 'auto', 'auto', '51px', 'auto'],
                                text: "<p style=\"margin: 0px;\">​TA</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [20, "px"], "rgba(6,202,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'ATC_TCAS_largeText5',
                                type: 'text',
                                rect: ['auto', '134px', 'auto', 'auto', '19px', 'auto'],
                                text: "<p style=\"margin: 0px;\">​RA</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [20, "px"], "rgba(6,202,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'ATC_TCAS_mediumText5',
                                type: 'text',
                                rect: ['auto', '136px', 'auto', 'auto', '41px', 'auto'],
                                text: "<p style=\"margin: 0px;\">/</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [14, "px"], "rgba(6,202,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'NextPage_menuOption',
                                type: 'text',
                                rect: ['8px', '189px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​NEXT PAGE</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'ADF2_header',
                                type: 'text',
                                rect: ['139px', '189px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​ADF2</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [14, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'mediumText9Copy2',
                                type: 'text',
                                rect: ['auto', '189px', 'auto', 'auto', '29px', 'auto'],
                                text: "<p style=\"margin: 0px;\">​1799</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [14, "px"], "rgba(0,254,0,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'mediumText9Copy',
                                type: 'text',
                                rect: ['209px', '189px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">.</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [14, "px"], "rgba(0,254,0,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'mediumText9',
                                type: 'text',
                                rect: ['217px', '189px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">0</p>",
                                align: "left",
                                font: ['BATC_AFD_GOTHIC', [14, "px"], "rgba(0,254,0,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            }]
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
                    duration: 3615,
                    autoPlay: false,
                    labels: {
                        "//Hide_SecondButtonState": 0,
                        "//Show_SecondButtonState": 3615
                    },
                    data: [
                        [
                            "eid18",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${hexShapeKnob_wText_right30deg}",
                            '0',
                            '0'
                        ],
                        [
                            "eid19",
                            "opacity",
                            3500,
                            0,
                            "linear",
                            "${hexShapeKnob_wText_right30deg}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${PointingChevron_Right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "opacity",
                            1250,
                            250,
                            "linear",
                            "${PointingChevron_Right}",
                            '1',
                            '0'
                        ],
                        [
                            "eid15",
                            "opacity",
                            1500,
                            500,
                            "linear",
                            "${PointingChevron_Right}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            2500,
                            500,
                            "linear",
                            "${PointingChevron_Right}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${hexShapeKnob_wText_top}",
                            '1',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            3500,
                            0,
                            "linear",
                            "${hexShapeKnob_wText_top}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Playbar_Example3_edgeActions.js");
})("EDGE-579717180");
