
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("NavButton_Back2").hide();sym.$("AC").show();sym.$("DC").show();sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_NavButton_Fwd1}","click",function(sym,e){sym.$("Synoptic_Normal2").hide();sym.$("AC").hide();sym.$("DC").hide();sym.$("Synoptic_Normal3").show();sym.play("Synop_anim");sym.$("NavButton_Back2").show();sym.$("NavButton_Fwd1").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_NavButton_Back2}","click",function(sym,e){sym.$("NavButton_Back2").hide();sym.$("NavButton_Fwd1").show();sym.stop("Schema_anim");sym.$("AC").show();sym.$("DC").show();sym.$("Synoptic_Normal3").hide();sym.$("Synoptic_Normal2").show();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-235715816");