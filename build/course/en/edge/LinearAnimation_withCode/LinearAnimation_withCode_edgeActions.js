/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         $("<link/>", {"rel": "stylesheet", "type": "text/css", "href": "styles/graphicStyles.css" }).appendTo("head");
         $("<link/>", {"rel": "stylesheet", "type": "text/css", "href": "styles/digitalbusStyles.css" }).appendTo("head");
         $("<link/>", {"rel": "stylesheet", "type": "text/css", "href": "styles/digitalbusStyles2.css" }).appendTo("head");
         $("<link/>", {"rel": "stylesheet", "type": "text/css", "href": "styles/shapeSymbols.css" }).appendTo("head");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Caution_Button}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Hotspot_Caution}", "click", function(sym, e) {
         
         // Hide an element 
         sym.$("Caution_Button").hide();
         
         // Mute an audio track. Set muted to false to toggle off 
         sym.$("triple_chime_left_engine_fire")[0].muted = true;
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         // Hide an element 
         sym.$("Caution_Button").hide();
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         // Play an audio track 
         sym.$("triple_chime_left_engine_fire")[0].play();
         
         // Show an element 
         sym.$("Caution_Button").show();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'MediumText'
   (function(symbolName) {   
   
   })("MediumText_dRedAFD");
   //Edge symbol end:'MediumText_dRedAFD'

   //=========================================================
   
   //Edge symbol: 'Text_schematicRegular'
   (function(symbolName) {   
   
   })("Text_schematicRegular");
   //Edge symbol end:'Text_schematicRegular'

   //=========================================================
   
   //Edge symbol: 'LargeText_dMagentaAFD'
   (function(symbolName) {   
   
   })("LargeText_dMagentaAFD");
   //Edge symbol end:'LargeText_dMagentaAFD'

   //=========================================================
   
   //Edge symbol: 'MediumText_dGreenAFD'
   (function(symbolName) {   
   
   })("MediumText_dGreenAFD");
   //Edge symbol end:'MediumText_dGreenAFD'

   //=========================================================
   
   //Edge symbol: 'Text_callout'
   (function(symbolName) {   
   
   })("Text_callout");
   //Edge symbol end:'Text_callout'

   //=========================================================
   
   //Edge symbol: 'Text_auralWarning'
   (function(symbolName) {   
   
   })("Text_auralWarning");
   //Edge symbol end:'Text_auralWarning'

   //=========================================================
   
   //Edge symbol: 'LargeText_dCyanAFD'
   (function(symbolName) {   
   
   })("LargeText_dCyanAFD");
   //Edge symbol end:'LargeText_dCyanAFD'

   //=========================================================
   
   //Edge symbol: 'LargeText_dGreyAFD'
   (function(symbolName) {   
   
   })("LargeText_dGreyAFD");
   //Edge symbol end:'LargeText_dGreyAFD'

   //=========================================================
   
   //Edge symbol: 'LargeText_WhiteAFD'
   (function(symbolName) {   
   
   })("LargeText_WhiteAFD");
   //Edge symbol end:'LargeText_WhiteAFD'

   //=========================================================
   
   //Edge symbol: 'MediumText_dGreyAFD'
   (function(symbolName) {   
   
   })("MediumText_dGreyAFD");
   //Edge symbol end:'MediumText_dGreyAFD'

   //=========================================================
   
   //Edge symbol: 'LargeText_dGreenAFD'
   (function(symbolName) {   
   
   })("LargeText_dGreenAFD");
   //Edge symbol end:'LargeText_dGreenAFD'

   //=========================================================
   
   //Edge symbol: 'LargeText_dRedAFD'
   (function(symbolName) {   
   
   })("LargeText_dRedAFD");
   //Edge symbol end:'LargeText_dRedAFD'

   //=========================================================
   
   //Edge symbol: 'LargeText_dYellowAFD'
   (function(symbolName) {   
   
   })("LargeText_dYellowAFD");
   //Edge symbol end:'LargeText_dYellowAFD'

   //=========================================================
   
   //Edge symbol: 'Text_schematicBolf'
   (function(symbolName) {   
   
   })("Text_schematicBold");
   //Edge symbol end:'Text_schematicBold'

   //=========================================================
   
   //Edge symbol: 'MediumText_dCyanAFD'
   (function(symbolName) {   
   
   })("MediumText_dCyanAFD");
   //Edge symbol end:'MediumText_dCyanAFD'

   //=========================================================
   
   //Edge symbol: 'Text_procedure'
   (function(symbolName) {   
   
   })("Text_procedure");
   //Edge symbol end:'Text_procedure'

   //=========================================================
   
   //Edge symbol: 'Text_bracketedCallout'
   (function(symbolName) {   
   
   })("Text_bracketedCallout");
   //Edge symbol end:'Text_bracketedCallout'

   //=========================================================
   
   //Edge symbol: 'MediumText_dYellowAFD'
   (function(symbolName) {   
   
   })("MediumText_dYellowAFD");
   //Edge symbol end:'MediumText_dYellowAFD'

   //=========================================================
   
   //Edge symbol: 'Text_caption'
   (function(symbolName) {   
   
   })("Text_caption");
   //Edge symbol end:'Text_caption'

   //=========================================================
   
   //Edge symbol: 'MediumText_dMagentaAFD'
   (function(symbolName) {   
   
   })("MediumText_dMagentaAFD");
   //Edge symbol end:'MediumText_dMagentaAFD'

   //=========================================================
   
   //Edge symbol: 'MediumText_WhiteAFD'
   (function(symbolName) {   
   
   })("MediumText_WhiteAFD");
   //Edge symbol end:'MediumText_WhiteAFD'

})(jQuery, AdobeEdge, "EDGE-235715816");