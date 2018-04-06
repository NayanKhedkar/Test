define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("buttons", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "<button class=\"base button submit\">\n    <span>  \n        ";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.submit : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += " \n    </span>\n</button>\n<button class=\"base button reset\">\n    <span>\n        ";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.reset : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += " \n    </span>\n</button> \n<button class=\"base button model\">\n    <span> \n        ";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.showCorrectAnswer : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += " \n    </span>\n</button>\n<button class=\"base button user\">\n    <span>\n        ";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.hideCorrectAnswer : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + " \n    </span>\n</button>\n";
},"useData":true}));

Handlebars.registerPartial("component", Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "	<div class=\""
    + escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + "-title component-title\">\n	    <div role=\"heading\" tabindex=\"0\" class=\""
    + escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + "-title-inner component-title-inner\"  aria-level=\"4\">\n	        ";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n	    </div>\n	</div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "	<div class=\""
    + escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + "-body component-body\">\n	    <div class=\""
    + escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + "-body-inner component-body-inner\">\n	        ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n	    </div>\n	</div>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "	<div class=\""
    + escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction component-instruction\">\n	    <div class=\""
    + escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction-inner component-instruction-inner\">\n	        ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n	    </div>\n	</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}));

Handlebars.registerPartial("state", Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "		<span tabindex=\"0\" role=\"region\" class=\"aria-label a11y-ignore-focus prevent-default\" id=\"buttons-aria-label-complete\">"
    + escapeExpression(((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helperMissing).call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"a11y_normalize","hash":{},"data":data})))
    + " "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isQuestionType : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._canShowFeedback : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"3":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.correct : stack1), depth0));
  },"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incorrect : stack1), depth0));
  },"8":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "		<span tabindex=\"0\" role=\"region\" class=\"aria-label a11y-ignore-focus prevent-default\" id=\"buttons-aria-label-incomplete\">"
    + escapeExpression(((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helperMissing).call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"a11y_normalize","hash":{},"data":data})))
    + " "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0))
    + "</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"accessibility-state\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true}));

this["Handlebars"]["templates"]["cas"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._header : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                          <th class=\"table-header\" id="
    + escapeExpression(((helper = (helper = helpers._header || (depth0 != null ? depth0._header : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_header","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._width : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">"
    + escapeExpression(((helper = (helper = helpers._header || (depth0 != null ? depth0._header : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_header","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "style=\"width:"
    + escapeExpression(((helper = (helper = helpers._width || (depth0 != null ? depth0._width : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_width","hash":{},"data":data}) : helper)))
    + "px;\" ";
},"5":function(depth0,helpers,partials,data) {
  return " style=\"width:auto;\" ";
  },"7":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isOptionalMessageType : depth0), {"name":"unless","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(12, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                  <tr class=\"subheading\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.messageType : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                      <th class=\"display-none-one\"></th>\n                      <th class=\"display-none-two\"></th>\n                      <th class=\"display-none-three\"></th>\n                  </tr>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                         <th class=\"subheading-title\">";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isOptionalMessageType : depth0), {"name":"unless","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</th>\n";
},"10":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers.messageType || (depth0 != null ? depth0.messageType : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"messageType","hash":{},"data":data}) : helper)));
  },"12":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = "\n                        <tr class=\"header-text\">\n                            <td class=\"message message-cell "
    + escapeExpression(((helpers.lowerCase || (depth0 && depth0.lowerCase) || helperMissing).call(depth0, (depths[1] != null ? depths[1].messageType : depths[1]), {"name":"lowerCase","hash":{},"data":data})))
    + "\"><b>";
  stack1 = ((helper = (helper = helpers.MESSAGE || (depth0 != null ? depth0.MESSAGE : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"MESSAGE","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</b></td>\n                             <td class=\"logic\">";
  stack1 = ((helper = (helper = helpers.LOGIC || (depth0 != null ? depth0.LOGIC : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"LOGIC","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\n                             <td class=\"inhibit\">"
    + escapeExpression(((helper = (helper = helpers.INHIBIT || (depth0 != null ? depth0.INHIBIT : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"INHIBIT","hash":{},"data":data}) : helper)))
    + "</td>\n                             <td class=\"voice\">"
    + escapeExpression(((helper = (helper = helpers.VOICE || (depth0 != null ? depth0.VOICE : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"VOICE","hash":{},"data":data}) : helper)))
    + "</td>\n                       </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"cas-inner bombardier-table component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._cas : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"cas-widget component-widget\">\n        <div class=\"cas-component-inner\">\n         <table class=\"cas-container\" id=\"table\" style=\"width:100%;\">\n                <tr class=\"header\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._columns : depth0), {"name":"each","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </tr>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.table : depth0)) != null ? stack1._records : stack1), {"name":"each","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </table>\n            <div class=\"note\">";
  stack1 = ((helper = (helper = helpers._tableNote || (depth0 != null ? depth0._tableNote : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_tableNote","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n        </div>\n     </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["casInteractive"] = Handlebars.template({"1":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "				    <tr class=\"row  ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isOptionalMessageType : depth0), {"name":"if","hash":{},"fn":this.program(2, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n				        <th class=\"table-header column\" colspan=\"2\"><b>";
  stack1 = ((helpers.toUpperCase || (depth0 && depth0.toUpperCase) || helperMissing).call(depth0, (depth0 != null ? depth0.messageType : depth0), {"name":"toUpperCase","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</b></th>\n				    </tr>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"if","hash":{},"fn":this.program(4, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  return "display-none";
  },"4":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "			       <tr class=\"row row-bg\">\n                      <td class=\"column column-1\">\n                       ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isInteractive : depth0), {"name":"if","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</td>\n                      <td class=\"column column-2 "
    + escapeExpression(((helpers.lowerCase || (depth0 && depth0.lowerCase) || helperMissing).call(depth0, (depths[1] != null ? depths[1].messageType : depths[1]), {"name":"lowerCase","hash":{},"data":data})))
    + "\"><b>";
  stack1 = ((helpers.toUpperCase || (depth0 && depth0.toUpperCase) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.cellData : depth0)) != null ? stack1.message : stack1), {"name":"toUpperCase","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</b></td>\n			       </tr>\n";
},"6":function(depth0,helpers,partials,data) {
  return "<div class=\"interactive-icon fa fa-external-link-square\"data-interactionComplete=\"false\" ></div>";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, functionType="function", buffer = "<div class=\"casInteractive-inner bombardier-table component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._casInteractive : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"casInteractive-widget component-widget\">\n       <div class=\"casInteractive-widget-inner\">\n         <table  cellpadding=\"0\" cellspacing=\"0\" border=\"1\">\n\n		    <tr class=\"row\">\n		        <th class=\"table-header column\" colspan=\"2\"><b>";
  stack1 = ((helpers.toUpperCase || (depth0 && depth0.toUpperCase) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.table : depth0)) != null ? stack1._headings : stack1)) != null ? stack1['0'] : stack1), {"name":"toUpperCase","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</b></th>\n		    </tr>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.table : depth0)) != null ? stack1._records : stack1), {"name":"each","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </table>\n        <div class=\"note\">";
  stack1 = ((helper = (helper = helpers.note || (depth0 != null ? depth0.note : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"note","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n       </div>\n   </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["casInteractivePopup"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "            <div class=\"popup-title\">\n                <div class=\"popup-title-inner table-header "
    + escapeExpression(((helpers.lowerCase || (depth0 && depth0.lowerCase) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.table : depth0)) != null ? stack1.messageType : stack1), {"name":"lowerCase","hash":{},"data":data})))
    + "\" tabindex=\"-1\" role=\"heading\" aria-level=\"1\" aria-hidden=\"true\">\n                    <b>";
  stack1 = ((helpers.toUpperCase || (depth0 && depth0.toUpperCase) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.table : depth0)) != null ? stack1.message : stack1), {"name":"toUpperCase","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</b>\n                </div>\n            </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, lambda=this.lambda, buffer = "          <table class=\"popupTable\" cellpadding=\"0\" cellspacing=\"0\" border=\"1\">\n              <tr class=\"row\">\n                <th class=\"table-header column\"><b>";
  stack1 = ((helpers.toUpperCase || (depth0 && depth0.toUpperCase) || helperMissing).call(depth0, (depth0 != null ? depth0['0'] : depth0), {"name":"toUpperCase","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</b></th>\n              </tr>\n              <tr class=\"row\">\n                <td class=\"column\">";
  stack1 = lambda((depth0 != null ? depth0['1'] : depth0), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\n              </tr>\n          </table>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"casInteractive-popup-inner bombardier-table\">\n    <div class=\"popup-toolbar\">\n        <div class=\"popup-toolbar-inner clearfix\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.table : depth0)) != null ? stack1.message : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            <button class=\"base popup-close\" tabindex=\"0\">\n                <div class=\"icon-close fa fa-times\"></div>\n            </button>\n        </div>\n    </div>\n    <div class=\"popup-content\">\n        <div class=\"popup-content-inner\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.table : depth0)) != null ? stack1.row : stack1), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n    </div>\n";
},"useData":true});

this["Handlebars"]["templates"]["generic"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  return " full ";
  },"5":function(depth0,helpers,partials,data) {
  return " pre-half ";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "                            <th id=\""
    + escapeExpression(lambda((data && data.index), depth0))
    + "\"  style=\"";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.width : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInvisible : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" colspan=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.cellInfo : depth0)) != null ? stack1.merge : stack1), depth0))
    + "\">";
  stack1 = ((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"header","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</th>\n";
},"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "width:"
    + escapeExpression(((helper = (helper = helpers.width || (depth0 != null ? depth0.width : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"width","hash":{},"data":data}) : helper)))
    + "px; ";
},"10":function(depth0,helpers,partials,data) {
  return "display:none;";
  },"12":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                        <tr>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rowData : depth0), {"name":"each","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                        </tr>\n";
},"13":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                                <td style=\"";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInvisible : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" rowspan=\""
    + escapeExpression(((helper = (helper = helpers.rowspan || (depth0 != null ? depth0.rowspan : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rowspan","hash":{},"data":data}) : helper)))
    + "\" colspan=\""
    + escapeExpression(((helper = (helper = helpers.colspan || (depth0 != null ? depth0.colspan : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"colspan","hash":{},"data":data}) : helper)))
    + "\">";
  stack1 = ((helper = (helper = helpers.data || (depth0 != null ? depth0.data : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"data","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\n";
},"14":function(depth0,helpers,partials,data) {
  return "display:none";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"generic-inner component-inner bombardier-table\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._generic : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._generic : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"generic-widget component-widget\">\n            <table class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isLayoutFull : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                <thead>\n                    <tr>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.table : depth0)) != null ? stack1.columns : stack1), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    </tr>\n                </thead>\n                <tbody>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.table : depth0)) != null ? stack1.rows : stack1), {"name":"each","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </tbody>\n            </table>\n            <div class=\"note\">";
  stack1 = ((helper = (helper = helpers.note || (depth0 != null ? depth0.note : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"note","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n    </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["tables"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"table-inner component-inner\"></div>\n";
  },"useData":true});

this["Handlebars"]["templates"]["accordionWithAudio"] = Handlebars.template({"1":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "        <div class=\"accordionWithAudio-item\">\n\n            <a href=\"#\" role=\"button\" class=\"accordionWithAudio-item-title ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(2, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" aria-expanded=\"false\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                <div class=\"accordionWithAudio-item-title-inner\">\n                    <div class=\"accordionWithAudio-item-title-icon icon icon-plus h5\"></div>\n                    ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                </div>\n            </a>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.audioSrc : depth0), {"name":"if","hash":{},"fn":this.program(4, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n            <div class=\"accordionWithAudio-item-body\">\n                <div class=\"accordionWithAudio-item-body-inner\">\n                    ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                </div>\n            </div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.audioSrc : depth0), {"name":"if","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n";
},"2":function(depth0,helpers,partials,data) {
  return "visited";
  },"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = "            <a href=\"#\" class=\"accordionWithAudio-audio\">\n                <div class=\"accordionWithAudio-sound component-item-text-color icon ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._audio_404 : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"></div>\n            </a>\n";
},"5":function(depth0,helpers,partials,data) {
  return "audio_404";
  },"7":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "            <div class=\"accordionWithAudio-item-audio\">\n                <audio preload=\"none\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.audioTypes : depth0), {"name":"each","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </audio>\n            </div>\n";
},"8":function(depth0,helpers,partials,data,depths) {
  var helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "                    <source src=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1].audioSrc : depths[1]), depth0))
    + "."
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + "\" type=\""
    + escapeExpression(((helper = (helper = helpers.codec || (depth0 != null ? depth0.codec : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"codec","hash":{},"data":data}) : helper)))
    + "\">\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"accordionWithAudio-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._accordionWithAudio : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"accordionWithAudio-widget component-widget\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n</div>";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["accordion"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "            <div class=\"leftItems\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._leftItems : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n            <div class=\"rightItems\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._rightItems : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                    <div id=\"item-"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"accordion-item accordion-item-position ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isDummy : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                        <button role=\"button\" class=\"base accordion-item-title visited selected \" aria-expanded=\"false\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                          <div class=\"accordion-item-title-inner\">\n                            <div class=\"accordion-item-title-icon icon icon-minus h5\"></div>\n                                  ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                          </div>\n                        </button>\n                        <div class=\"accordion-item-body\" style=\"display:block;\">\n                            <div class=\"accordion-item-body-inner\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._graphic : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                            </div>\n                        </div>\n                        </div>\n";
},"3":function(depth0,helpers,partials,data) {
  return " visibility-hidden";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                                <div class=\"accordion-item-graphic\">\n                                    <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" tabindex=\"0\">\n                                </div>\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"9":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <div class=\"accordion-item\">\n                    <button role=\"button\" class=\"base accordion-item-title ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" aria-expanded=\"false\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                      <div class=\"accordion-item-title-inner\">\n                        <div class=\"accordion-item-title-icon icon icon-plus h5\"></div>\n                              ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                      </div>\n                    </button>\n                    <div class=\"accordion-item-body\">\n                        <div class=\"accordion-item-body-inner\">\n                            <div class=\"accordion-item-text\">\n                                ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                            </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._graphic : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                        </div>\n                    </div>\n                </div>\n";
},"10":function(depth0,helpers,partials,data) {
  return "visited";
  },"12":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"13":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <div class=\"accordion-item-graphic\">\n                                <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" tabindex=\"0\">\n                            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"accordion-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._accordion : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"accordion-widget component-widget\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isPartOfVerticalBlockSlider : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["assessmentResults"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "        <div class=\"results-retry component-feedback\">\n            <div class=\"results-retry-inner component-feedback-inner\">\n                ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.retryFeedback : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"results-retry-button\">\n                <button>";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._retry : depth0)) != null ? stack1.button : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</button>\n            </div>\n        </div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._retry : depth0)) != null ? stack1.button : stack1), depth0));
  },"4":function(depth0,helpers,partials,data) {
  return "Retry";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"results-inner component-inner\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"results-widget component-widget\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isRetryEnabled : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["blank"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"blank-inner component-inner\"></div>\n";
  },"useData":true});

this["Handlebars"]["templates"]["gmcq"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"3":function(depth0,helpers,partials,data) {
  return "correct";
  },"5":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, functionType="function", buffer = "        <div class=\"gmcq-item component-item ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + " "
    + escapeExpression(((helpers.odd || (depth0 && depth0.odd) || helperMissing).call(depth0, (data && data.index), {"name":"odd","hash":{},"data":data})))
    + "\">\n            <input type=\"checkbox\" id=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" aria-labelledby=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\"";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " aria-label=\""
    + escapeExpression(((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helperMissing).call(depth0, (depth0 != null ? depth0.text : depth0), {"name":"a11y_normalize","hash":{},"data":data})))
    + " "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"/>\n            <label aria-hidden=\"true\" id=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\" for=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(11, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " component-item-color component-item-text-color component-item-border ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isSelected : depth0), {"name":"if","hash":{},"fn":this.program(13, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n\n                <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" data-large=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.large : stack1), depth0))
    + "\" data-small=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.small : stack1), depth0))
    + "\"/>\n\n                <div class=\"gmcq-item-checkbox\">\n                    <div class=\"gmcq-item-state\">\n                        <div class=\"gmcq-item-icon gmcq-answer-icon ";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1]._isRadio : depths[1]), {"name":"if","hash":{},"fn":this.program(15, data, depths),"inverse":this.program(17, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " icon\"></div>\n                        <div class=\"gmcq-item-icon gmcq-correct-icon icon icon-tick\"></div>\n                        <div class=\"gmcq-item-icon gmcq-incorrect-icon icon icon-cross\"></div>\n                    </div>\n                    <div class=\"gmcq-item-inner h5\">\n                        ";
  stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                    </div>\n                </div>\n            </label>\n        </div>\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"7":function(depth0,helpers,partials,data) {
  return "incorrect";
  },"9":function(depth0,helpers,partials,data) {
  return " disabled";
  },"11":function(depth0,helpers,partials,data) {
  return "disabled ";
  },"13":function(depth0,helpers,partials,data) {
  return "selected";
  },"15":function(depth0,helpers,partials,data) {
  return "radio";
  },"17":function(depth0,helpers,partials,data) {
  return "checkbox";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"gmcq-inner component-inner clearfix\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._gmcq : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"gmcq-widget component-widget clearfix ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n    <div class=\"buttons\">\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["graphic"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " graphic-widget-attribution";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "        <div class=\"graphic-attribution\">";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"graphic-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._graphic : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"graphic-widget component-widget";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n        <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" data-large=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.large : stack1), depth0))
    + "\" data-small=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.small : stack1), depth0))
    + "\"  tabindex=\"0\"/>\n    </div>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["hotgraphic"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  return "tile";
  },"5":function(depth0,helpers,partials,data) {
  return "pin";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "          <div class=\"hotgraphic-popup-nav component-item-color\">\n            <button class=\"base hotgraphic-popup-controls back\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\" role=\"button\">\n              <div class=\"hotgraphic-popup-arrow-l component-item-text-color icon icon-controls-small-left\"></div>\n            </button>\n            <div class=\"hotgraphic-popup-count component-item-text-color\">\n              <span class=\"current\">1</span>/<span class=\"total\">3</span>\n            </div>\n            <button class=\"base hotgraphic-popup-controls next\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\" role=\"button\">\n              <div class=\"hotgraphic-popup-arrow-r component-item-text-color icon icon-controls-small-right\"></div>\n            </button>\n          </div>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "          <div class=\"hotgraphic-item component-item item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + " "
    + escapeExpression(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_classes","hash":{},"data":data}) : helper)))
    + "\">\n            <div class=\"hotgraphic-item-graphic\">\n              <div class=\"hotgraphic-item-graphic-inner\">\n                <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" tabindex=\"0\"/>\n              </div>\n            </div>\n            <div class=\"hotgraphic-item-content\">\n              <div class=\"hotgraphic-item-content-inner\">\n                <div class=\"hotgraphic-content-title accessible-text-block\" role=\"heading\" aria-level=\"5\" tabindex=\"0\">\n                  ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                </div>\n                <div class=\"hotgraphic-content-body\">\n                  ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                </div>\n              </div>\n            </div>\n          </div>\n";
},"11":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "        <div class=\"hotgraphic-narrative\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(12, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n";
},"12":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "          <button class=\"base hotgraphic-graphic-pin component-item-text-color ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(13, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " hotgraphic-graphic-pin-"
    + escapeExpression(lambda((data && data.index), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1._classes : stack1), {"name":"if","hash":{},"fn":this.program(15, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-id=\"item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" style=\"top:";
  stack1 = ((helper = (helper = helpers._top || (depth0 != null ? depth0._top : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_top","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "%; left:";
  stack1 = ((helper = (helper = helpers._left || (depth0 != null ? depth0._left : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_left","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "%;\" role=\"button\" aria-label=\"Item "
    + escapeExpression(((helpers.numbers || (depth0 && depth0.numbers) || helperMissing).call(depth0, (data && data.index), {"name":"numbers","hash":{},"data":data})))
    + ". "
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + ".";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(17, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n            <div class=\"hotgraphic-graphic-pin-image component-item-color item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" style=\"background-image: url("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + ")\"></div>\n          </button>\n";
},"13":function(depth0,helpers,partials,data) {
  return "visited";
  },"15":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1._classes : stack1), depth0));
  },"17":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depths[2] != null ? depths[2]._globals : depths[2])) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.visited : stack1), depth0))
    + ".";
},"19":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "        <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" tabindex=\"0\"/>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(20, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"20":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "          <button class=\"base hotgraphic-graphic-pin component-item-text-color item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(13, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-id=\"item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" style=\"top:";
  stack1 = ((helper = (helper = helpers._top || (depth0 != null ? depth0._top : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_top","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "%; left:";
  stack1 = ((helper = (helper = helpers._left || (depth0 != null ? depth0._left : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_left","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "%;\" role=\"button\" aria-label=\"Item "
    + escapeExpression(((helpers.numbers || (depth0 && depth0.numbers) || helperMissing).call(depth0, (data && data.index), {"name":"numbers","hash":{},"data":data})))
    + ". "
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + ".";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(17, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n            <div class=\"hotgraphic-graphic-pin-icon component-item-color icon icon-pin item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\"></div>\n          </button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"hotgraphic-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._hotgraphic : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._hotgraphic : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n";
  stack1 = this.invokePartial(partials.component, '  ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "  <div class=\"hotgraphic-widget component-widget ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._useGraphicsAsPins : depth0), {"name":"if","hash":{},"fn":this.program(3, data, depths),"inverse":this.program(5, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n\n    <div class=\"hotgraphic-graphic\">\n\n      <div class=\"hotgraphic-popup\" role=\"dialog\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._hotgraphic : stack1)) != null ? stack1.ariaPopupLabel : stack1), depth0))
    + "\">\n\n        <div class=\"hotgraphic-popup-toolbar component-item-color clearfix\">\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._hidePagination : depth0), {"name":"unless","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "          <button class=\"base hotgraphic-popup-done\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\" role=\"button\">\n            <div class=\"hotgraphic-popup-close component-item-text-color icon icon-cross\"></div>\n          </button>\n        </div>\n\n        <div class=\"hotgraphic-popup-inner clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n      </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._useGraphicsAsPins : depth0), {"name":"if","hash":{},"fn":this.program(11, data, depths),"inverse":this.program(19, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["matching"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  return "correct";
  },"7":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "    <div class=\"matching-item item ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n      <div class=\"matching-item-title\">";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.text : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n      <div class=\"matching-select-container component-item-color\">\n        <div class=\"matching-select-state\">\n          <div class=\"matching-select-icon component-text-color matching-dropdown-icon icon icon-controls-small-down\"></div>\n          <div class=\"matching-select-icon component-text-color matching-correct-icon icon icon-tick\"></div>\n          <div class=\"matching-select-icon component-text-color matching-incorrect-icon icon icon-cross\"></div>\n        </div>\n        <select class=\"matching-select component-text-color\"";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(11, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n          <option>\n            "
    + escapeExpression(lambda((depths[1] != null ? depths[1].placeholder : depths[1]), depth0))
    + "\n          </option>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._options : depth0), {"name":"each","hash":{},"fn":this.program(13, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </select>\n      </div>\n    </div>\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"9":function(depth0,helpers,partials,data) {
  return "incorrect";
  },"11":function(depth0,helpers,partials,data) {
  return " disabled";
  },"13":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "          <option ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isSelected : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n            "
    + escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + "\n          </option>\n";
},"14":function(depth0,helpers,partials,data) {
  return "selected";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"matching-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._matching : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._matching : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n";
  stack1 = this.invokePartial(partials.component, '  ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "  <div class=\"matching-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n  <div class=\"buttons\">\n  </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["mcq"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  return "correct";
  },"7":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, functionType="function", buffer = "        <div class=\"mcq-item component-item component-item-color ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n            <input type=\"checkbox\" id=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" aria-labelledby=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\"";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(13, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " aria-label=\""
    + escapeExpression(((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helperMissing).call(depth0, (depth0 != null ? depth0.text : depth0), {"name":"a11y_normalize","hash":{},"data":data})))
    + "\"/>\n            <label aria-hidden=\"true\" id=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\" for=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"component-item-text-color component-item-border";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(15, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isSelected : depth0), {"name":"if","hash":{},"fn":this.program(17, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                <div class=\"mcq-item-state\">\n                    <div class=\"mcq-item-icon mcq-answer-icon ";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1]._isRadio : depths[1]), {"name":"if","hash":{},"fn":this.program(19, data, depths),"inverse":this.program(21, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " component-item-text-color icon\"></div>\n                    <div class=\"mcq-item-icon mcq-correct-icon icon icon-tick\"></div>\n                    <div class=\"mcq-item-icon mcq-incorrect-icon icon icon-cross\"></div>\n                </div>\n                <div class=\"mcq-item-inner h5\">\n                    ";
  stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                </div>\n            </label>\n        </div>\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.program(11, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"9":function(depth0,helpers,partials,data) {
  return " correct";
  },"11":function(depth0,helpers,partials,data) {
  return " incorrect";
  },"13":function(depth0,helpers,partials,data) {
  return " disabled";
  },"15":function(depth0,helpers,partials,data) {
  return " disabled ";
  },"17":function(depth0,helpers,partials,data) {
  return " selected";
  },"19":function(depth0,helpers,partials,data) {
  return "radio";
  },"21":function(depth0,helpers,partials,data) {
  return "checkbox";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"mcq-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._mcq : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._mcq : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"mcq-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n    <div class=\"buttons\">\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["media"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._media : stack1)) != null ? stack1.transcriptButton : stack1), depth0));
  },"3":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "      <audio src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp3 : stack1), depth0))
    + "\" type=\"audio/mp3\" style=\"width: 100%; height: 100%;\"/>\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogg : stack1), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"8":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "        <audio src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogg : stack1), depth0))
    + "\" type=\"audio/ogg\" style=\"width: 100%; height: 100%;\"/>\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "        <video preload=\"none\" width=\"640\" height=\"360\" ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._playsinline : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.type : stack1), "video/vimeo", {"name":"if_value_equals","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " style=\"width:100%; height:100%;\" controls=\"controls\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.source : stack1), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.program(19, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._useClosedCaptions : depth0), {"name":"if","hash":{},"fn":this.program(26, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </video>\n";
},"11":function(depth0,helpers,partials,data) {
  return "playsinline";
  },"13":function(depth0,helpers,partials,data) {
  return "";
},"15":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "poster=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.poster : stack1), depth0))
    + "\"";
},"17":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <source src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.source : stack1), depth0))
    + "\" type=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.type : stack1), depth0))
    + "\"/>\n";
},"19":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp4 : stack1), {"name":"if","hash":{},"fn":this.program(20, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogv : stack1), {"name":"if","hash":{},"fn":this.program(22, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.webm : stack1), {"name":"if","hash":{},"fn":this.program(24, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"20":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "              <source src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp4 : stack1), depth0))
    + "\" type=\"video/mp4\"/>\n";
},"22":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "              <source src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogv : stack1), depth0))
    + "\" type=\"video/ogg\"/>\n";
},"24":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "              <source src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.webm : stack1), depth0))
    + "\" type=\"video/webm\"/>\n";
},"26":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.cc : stack1), {"name":"each","hash":{},"fn":this.program(27, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"27":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                  <track kind=\"subtitles\" src=\""
    + escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"src","hash":{},"data":data}) : helper)))
    + "\" type=\"text/vtt\" srclang=\""
    + escapeExpression(((helper = (helper = helpers.srclang || (depth0 != null ? depth0.srclang : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"srclang","hash":{},"data":data}) : helper)))
    + "\" />\n";
},"29":function(depth0,helpers,partials,data) {
  var stack1, buffer = "    <div class=\"media-transcript-container\">\n\n      <div class=\"media-transcript-button-container\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._inlineTranscript : stack1), {"name":"if","hash":{},"fn":this.program(30, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._externalTranscript : stack1), {"name":"if","hash":{},"fn":this.program(35, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._inlineTranscript : stack1), {"name":"if","hash":{},"fn":this.program(38, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n    </div>\n";
},"30":function(depth0,helpers,partials,data) {
  var stack1, buffer = "          <button class=\"media-inline-transcript-button button\" role=\"button\">\n            <div class=\"transcript-text-container\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptButton : stack1), {"name":"if","hash":{},"fn":this.program(31, data),"inverse":this.program(33, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n          </button>\n";
},"31":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptButton : stack1), depth0))
    + "\n";
},"33":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLink : stack1), depth0))
    + "\n";
},"35":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "          <button onclick=\"window.open('"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLink : stack1), depth0))
    + "')\" class=\"media-external-transcript-button button\" role=\"button\">\n            <div class=\"transcript-text-container\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLinkButton : stack1), {"name":"if","hash":{},"fn":this.program(36, data),"inverse":this.program(33, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n          </button>\n";
},"36":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLinkButton : stack1), depth0))
    + "\n";
},"38":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "          <div class=\"media-inline-transcript-body-container\">\n            <div class=\"media-inline-transcript-body\">\n            ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptBody : stack1), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </div>\n          </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"media-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._media : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.transcriptLink : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._media : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"media-widget component-widget a11y-ignore-aria\">\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp3 : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._transcript : depth0), {"name":"if","hash":{},"fn":this.program(29, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    \n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["narrative"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "narrative-text-controls";
  },"3":function(depth0,helpers,partials,data) {
  return "display-none ";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <div class=\"narrative-content-item\">\n                    <div class=\"narrative-content-title\">\n                        <div class=\"narrative-content-title-inner accessible-text-block h5\" role=\"heading\" aria-level=\"5\" tabindex=\"0\">\n                            ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                        </div>\n                    </div>\n                    <div class=\"narrative-content-body\">\n                        <div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.bodySrc : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                        </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                    </div>\n                </div>\n";
},"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                            <img src=\""
    + escapeExpression(((helper = (helper = helpers.bodySrc || (depth0 != null ? depth0.bodySrc : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bodySrc","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"0\"/>\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "                        <div class=\"narrative-content-body-inner\">\n                            ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                        </div>\n";
},"10":function(depth0,helpers,partials,data) {
  return "                        <div class=\"narrative-progress component-item-color component-item-border\"></div>\n";
  },"12":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                    <button role=\"button\" class=\"base narrative-strapline-title\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strapline","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                    <div class=\"narrative-strapline-title-inner accessible-text-block h5\">\n                        ";
  stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strapline","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                    </div>\n                    <div class=\"icon icon-plus\"></div>\n                    <div class=\"focus-rect\"></div>\n                    </button>\n";
},"14":function(depth0,helpers,partials,data) {
  return " style=\"float: right;\" ";
  },"16":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "                <div class=\"narrative-slider-graphic ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.visited : depth0), {"name":"if","hash":{},"fn":this.program(17, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._iframe : depth0)) != null ? stack1.src : stack1), {"name":"if","hash":{},"fn":this.program(19, data, depths),"inverse":this.program(22, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </div>\n";
},"17":function(depth0,helpers,partials,data) {
  return "visited";
  },"19":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depths[2] != null ? depths[2]._isDesktop : depths[2]), {"name":"if","hash":{},"fn":this.program(20, data, depths),"inverse":this.program(22, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"20":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                    <div class=\"scroll-wrapper\">\n                        <iframe name='narrative-frame' scrolling=\"no\" class=\"narrative-frame scale\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._iframe : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" style=\"width:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._iframe : depth0)) != null ? stack1._width : stack1), depth0))
    + "px; height:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._iframe : depth0)) != null ? stack1._height : stack1), depth0))
    + "px;\">\n                        </iframe>\n                    </div>\n";
},"22":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                    <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), {"name":"if","hash":{},"fn":this.program(23, data),"inverse":this.program(25, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "/>\n";
},"23":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" tabindex=\"0\"";
},"25":function(depth0,helpers,partials,data) {
  return "class=\"a11y-ignore\" aria-hidden=\"true\" tabindex=\"-1\"";
  },"27":function(depth0,helpers,partials,data) {
  return "                <div class=\"narrative-progress component-item-color component-item-border\"></div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"narrative-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._narrative : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"narrative-widget component-widget ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._hasNavigationInTextArea : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n        <div class=\"narrative-content ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isPartOfVerticalBlockSlider : depth0), {"name":"if","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n            <div class=\"narrative-content-inner\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                <div class=\"narrative-controls-container clearfix\">\n                    <div class=\"narrative-indicators\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(10, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    </div>\n                    <button class=\"base narrative-controls narrative-control-left\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n                    <div class=\"icon icon-controls-left\"></div>\n                    </button>\n                    <button class=\"base narrative-controls narrative-control-right\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n                    <div class=\"icon icon-controls-right\"></div>\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"narrative-strapline\">\n            <div class=\"narrative-strapline-header\">\n                <div class=\"narrative-strapline-header-inner clearfix\">\n                    <div></div>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(12, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </div>\n            </div>\n        </div>\n        <div class=\"narrative-slide-container\" ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isPartOfVerticalBlockSlider : depth0), {"name":"if","hash":{},"fn":this.program(14, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n            <button class=\"base narrative-controls narrative-control-left\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n            <div class=\"icon icon-controls-left\"></div>\n            </button>\n            <button class=\"base narrative-controls narrative-control-right\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n            <div class=\"icon icon-controls-right\"></div>\n            </button>\n            <div class=\"narrative-slider clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(16, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n            <div class=\"narrative-indicators\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(27, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n        </div>\n        <div class=\"clearfix\"></div>\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["responsiveIframe"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "<div class=\"component-inner responsiveIframe-inner\">\n  <div class=\"component-widget responsiveIframe-widget\">\n    <div class=\"responsiveIframe-iframe-holder\">\n      <iframe scrolling=\"no\" class=\"responsiveIframe-iframe\" src=\""
    + escapeExpression(((helper = (helper = helpers._source || (depth0 != null ? depth0._source : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_source","hash":{},"data":data}) : helper)))
    + "\"\n        data-height-large=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._height : depth0)) != null ? stack1._large : stack1), depth0))
    + "\" data-height-medium=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._height : depth0)) != null ? stack1._medium : stack1), depth0))
    + "\" data-height-small=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._height : depth0)) != null ? stack1._small : stack1), depth0))
    + "\"\n        data-width-large=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._width : depth0)) != null ? stack1._large : stack1), depth0))
    + "\" data-width-medium=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._width : depth0)) != null ? stack1._medium : stack1), depth0))
    + "\" data-width-small=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._width : depth0)) != null ? stack1._small : stack1), depth0))
    + "\">\n      </iframe>\n    </div>\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["slider"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  return "correct";
  },"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <button tabindex=\"0\" role=\"button\" class=\"base slider-scale-number\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "</button>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"10":function(depth0,helpers,partials,data) {
  return "incorrect";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"slider-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._slider : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._slider : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"slider-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n        <div class=\"slider-holder clearfix\">\n            <div class=\"slider-scale-labels\">\n                <div class=\"slider-scale-start\" tabindex=\"0\" role=\"region\">"
    + escapeExpression(((helper = (helper = helpers.labelStart || (depth0 != null ? depth0.labelStart : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"labelStart","hash":{},"data":data}) : helper)))
    + "</div>\n                <div class=\"slider-scale-end\" tabindex=\"0\" role=\"region\">"
    + escapeExpression(((helper = (helper = helpers.labelEnd || (depth0 != null ? depth0.labelEnd : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"labelEnd","hash":{},"data":data}) : helper)))
    + "</div>\n            </div>\n            <div class=\"slider-scale-numbers clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n             <div class=\"slider-scaler component-item-color\">\n                <div class=\"slider-modelranges\"></div>\n                <div class=\"slider-markers\"></div>\n                <div class=\"slider-answer component-item-color component-item-text-color\"></div>\n                <div class=\"slider-scale-marker component-item-color component-item-text-color a11y-ignore\" aria-hidden=\"true\" tabindex=\"-1\"></div>\n            </div>\n            <div class=\"slider-background\">\n                <div class=\"slider-item component-item ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                    <div class=\"slider-sliderange\">\n                        <button class=\"base slider-handle component-item-color component-item-text-color a11y-ignore\" tabindex=\"-1\" aria-hidden=\"true\"></button>\n                        <div class=\"slider-bar component-item-color\"></div>\n                    </div>\n                    <div class=\"slider-outer-bar\">\n                    <div class=\"slider-item-state\">\n                        <div class=\"slider-icon slider-correct-icon icon icon-tick\"></div>\n                        <div class=\"slider-icon slider-incorrect-icon icon icon-cross\"></div>\n                    </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <div class=\"buttons\">\n        </div>\n    </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["text"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"text-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._text : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["textinput"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  return "correct";
  },"7":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "        <div class=\"textinput-item component-item component-item-color component-item-border clearfix ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.prefix : depth0), {"name":"if","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.suffix : depth0), {"name":"if","hash":{},"fn":this.program(10, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(12, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.prefix : depth0), {"name":"if","hash":{},"fn":this.program(15, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"if","hash":{},"fn":this.program(17, data, depths),"inverse":this.program(19, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.suffix : depth0), {"name":"if","hash":{},"fn":this.program(21, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            <div class=\"textinput-item-state\">\n                <div class=\"textinput-icon textinput-correct-icon icon icon-tick\"></div>\n                <div class=\"textinput-icon textinput-incorrect-icon icon icon-cross\"></div>\n            </div>\n        </div>\n";
},"8":function(depth0,helpers,partials,data) {
  return "prefix";
  },"10":function(depth0,helpers,partials,data) {
  return "suffix";
  },"12":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(13, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"13":function(depth0,helpers,partials,data) {
  return "incorrect";
  },"15":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <label class=\"textinput-item-prefix component-item-text-color\" id=\""
    + escapeExpression(lambda((depths[2] != null ? depths[2]._id : depths[2]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\" for=\""
    + escapeExpression(lambda((depths[2] != null ? depths[2]._id : depths[2]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.prefix || (depth0 != null ? depth0.prefix : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"prefix","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                    ";
  stack1 = ((helper = (helper = helpers.prefix || (depth0 != null ? depth0.prefix : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"prefix","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                </label>\n";
},"17":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                <input type=\"text\" placeholder=\"";
  stack1 = ((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"placeholder","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" class=\"textinput-item-textbox\" data-id=\"input-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" id=\""
    + escapeExpression(lambda((depths[2] != null ? depths[2]._id : depths[2]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" aria-labelledby=\""
    + escapeExpression(lambda((depths[2] != null ? depths[2]._id : depths[2]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\" value=\"\" role=\"textbox\">\n";
},"19":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                <input type=\"text\" placeholder=\"";
  stack1 = ((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"placeholder","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" class=\"textinput-item-textbox\" data-id=\"input-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.userAnswer || (depth0 != null ? depth0.userAnswer : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"userAnswer","hash":{},"data":data}) : helper)))
    + "\" disabled=\"true\" role=\"textbox\">\n";
},"21":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <label class=\"textinput-item-suffix component-item-text-color\" id=\""
    + escapeExpression(lambda((depths[2] != null ? depths[2]._id : depths[2]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\" for=\""
    + escapeExpression(lambda((depths[2] != null ? depths[2]._id : depths[2]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.suffix || (depth0 != null ? depth0.suffix : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"suffix","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                    ";
  stack1 = ((helper = (helper = helpers.suffix || (depth0 != null ? depth0.suffix : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"suffix","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                </label>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"textinput-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._textinput : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._textinput : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"textinput-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n    <div class=\"buttons\">\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["dragAndDrop"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  return "correct";
  },"7":function(depth0,helpers,partials,data) {
  return " scale";
  },"9":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "            <div class=\"dragAndDrop-item-container draggable-item-container\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(10, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                <div class=\"draggable-item-wrapper\" style=\"width:"
    + escapeExpression(lambda((depths[1] != null ? depths[1]._defaultWidth : depths[1]), depth0))
    + "px; height:"
    + escapeExpression(lambda((depths[1] != null ? depths[1]._defaultHeight : depths[1]), depth0))
    + "px;\" >\n                    <a href=\"#\" class=\"dragAndDrop-item draggable-item component-item component-item-color item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" index="
    + escapeExpression(lambda((data && data.index), depth0))
    + ">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(12, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._graphic : depth0), {"name":"if","hash":{},"fn":this.program(14, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                    </a>\n                </div>\n            </div>\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <div class=\"dragAndDrop-item-title draggable-item-title\">\n                    <div class=\"dragAndDrop-item-title-inner draggable-item-title-inner\">\n                        ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                    </div>\n                </div>\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                        <div class=\"dragAndDrop-item-body draggable-item-body\">\n                            <div class=\"dragAndDrop-item-body-inner draggable-item-body-inner\">\n                                ";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                            </div>\n                        </div>\n";
},"14":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"15":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                        <div class=\"dragAndDrop-item-graphic draggable-item-graphic\">\n                            <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" tabindex=\"0\">\n                        </div>\n";
},"17":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "            <div class=\"dragAndDrop-item-container droppable-item-container\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(18, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                <div class=\"dragAndDrop-item droppable-item";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(20, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" style=\"width:"
    + escapeExpression(lambda((depths[1] != null ? depths[1]._defaultWidth : depths[1]), depth0))
    + "px; height:"
    + escapeExpression(lambda((depths[1] != null ? depths[1]._defaultHeight : depths[1]), depth0))
    + "px;\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" index="
    + escapeExpression(lambda((data && data.index), depth0))
    + ">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(25, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._graphic : depth0), {"name":"if","hash":{},"fn":this.program(27, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </div>\n            </div>\n";
},"18":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <div class=\"dragAndDrop-item-title droppable-item-title\">\n                    <div class=\"dragAndDrop-item-title-inner droppable-item-title-inner\">\n                        ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                    </div>\n                </div>\n";
},"20":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(21, data),"inverse":this.program(23, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"21":function(depth0,helpers,partials,data) {
  return " correct";
  },"23":function(depth0,helpers,partials,data) {
  return " incorrect";
  },"25":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                    <div class=\"dragAndDrop-item-body droppable-item-body\">\n                        <div class=\"dragAndDrop-item-body-inner droppable-item-body-inner\">\n                            ";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                        </div>\n                    </div>\n";
},"27":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), {"name":"if","hash":{},"fn":this.program(28, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"28":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                    <div class=\"dragAndDrop-item-graphic droppable-item-graphic\">\n                        <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" tabindex=\"0\">\n                    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"dragAndDrop-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._dragAndDrop : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._dragAndDrop : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"dragAndDrop-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n        <div class=\"dragAndDrop-container draggables-container";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._shouldScale : depth0), {"name":"if","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._draggableItems : depth0), {"name":"each","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n        <div class=\"dragAndDrop-container droppables-container";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._shouldScale : depth0), {"name":"if","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._droppableItems : depth0), {"name":"each","hash":{},"fn":this.program(17, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n        <div class=\"dragAndDrop-dummy display-none\" style=\"width:"
    + escapeExpression(((helper = (helper = helpers._defaultWidth || (depth0 != null ? depth0._defaultWidth : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_defaultWidth","hash":{},"data":data}) : helper)))
    + "px; height:"
    + escapeExpression(((helper = (helper = helpers._defaultHeight || (depth0 != null ? depth0._defaultHeight : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_defaultHeight","hash":{},"data":data}) : helper)))
    + "px;\"></div>\n    </div>\n    <div class=\"buttons\">\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["embeddedLink"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "display-none";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                <div class=\"pagination-controller-bar clearfix\">\n                    <div class=\"embeddedLink-pagination-controls\">\n                        <div class=\"back-container\">\n                            <a href=\"#\" class=\"embeddedLink-popup-controls back\" title=\"back\" alt=\"back\">\n                                <span class=\"embeddedLink-popup-arrow-l component-item-text-color icon icon-controls-small-left\"></span>\n                            </a>\n                        </div>\n                        <div class=\"embeddedLink-popup-count component-item-text-color count-container\">\n                            <span class=\"current\">1</span>/<span class=\"total\">1</span>\n                        </div>\n                        <div class=\"next-container\">\n                            <a href=\"#\" class=\"embeddedLink-popup-controls next\" title=\"next\" alt=\"next\">\n                                <span class=\"embeddedLink-popup-arrow-r component-item-text-color icon icon-controls-small-right\"></span>\n                            </a>\n                        </div>\n                    </div>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._page : depth0)) != null ? stack1.audioSrc : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </div>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                        <div class=\"embeddedLink-audio-icon-container\">\n                            <a href=\"#\" class=\"embeddedLink-graphic-pin component-item-text-color ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                                <span class=\"embeddedLink-graphic-pin-icon component-item-color icon icon-sound icon-sound-mute\"></span>\n                            </a>\n                        </div>\n";
},"5":function(depth0,helpers,partials,data) {
  return "visited";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._page : depth0)) != null ? stack1.audioSrc : stack1), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                    <a href=\"#\" class=\"embeddedLink-graphic-pin component-item-text-color ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                        <div class=\"embeddedLink-graphic-pin-icon component-item-color icon icon-sound icon-sound-mute\"></div>\n                    </a>\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "                    <div class=\"page-title\">";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._page : depth0)) != null ? stack1.title : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"12":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "                    <div class=\"embeddedLink-item-audio\">\n                        <audio preload=\"none\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0._page : depth0)) != null ? stack1.audioTypes : stack1), {"name":"each","hash":{},"fn":this.program(13, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                        </audio>\n                    </div>\n";
},"13":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "                                <source src=\""
    + escapeExpression(lambda(((stack1 = (depths[1] != null ? depths[1]._page : depths[1])) != null ? stack1.audioSrc : stack1), depth0))
    + "."
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + "\" type=\""
    + escapeExpression(((helper = (helper = helpers.codec || (depth0 != null ? depth0.codec : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"codec","hash":{},"data":data}) : helper)))
    + "\">\n";
},"15":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <img class=\"embeddedLink-image\" src=\""
    + escapeExpression(((helper = (helper = helpers._source || (depth0 != null ? depth0._source : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_source","hash":{},"data":data}) : helper)))
    + "\">\n";
},"17":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVideo : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.program(20, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"18":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <video class=\"embeddedLink-video\" controls>\n                    <source src=\""
    + escapeExpression(((helper = (helper = helpers._source || (depth0 != null ? depth0._source : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_source","hash":{},"data":data}) : helper)))
    + "\" type=\"video/mp4\">\n                    <source src=\""
    + escapeExpression(((helper = (helper = helpers._source || (depth0 != null ? depth0._source : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_source","hash":{},"data":data}) : helper)))
    + "\" type=\"video/ogg\">\n                </video>\n";
},"20":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <img class=\"embeddedLink-iframe-posterImage\" src=\""
    + escapeExpression(((helper = (helper = helpers._posterImage || (depth0 != null ? depth0._posterImage : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_posterImage","hash":{},"data":data}) : helper)))
    + "\">\n                <iframe class=\"embeddedLink-iframe\" src=\""
    + escapeExpression(((helper = (helper = helpers._source || (depth0 != null ? depth0._source : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_source","hash":{},"data":data}) : helper)))
    + "\" style=\"height:"
    + escapeExpression(((helper = (helper = helpers._height || (depth0 != null ? depth0._height : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_height","hash":{},"data":data}) : helper)))
    + "px\">\n                </iframe>\n";
},"22":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                <div class=\"embeddedLink-lightBox-popup-container modal\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVideo : depth0), {"name":"if","hash":{},"fn":this.program(23, data),"inverse":this.program(25, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </div>\n";
},"23":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                        <video class=\"embeddedLink-lightBox-video\" controls>\n                            <source src=\""
    + escapeExpression(((helper = (helper = helpers._source || (depth0 != null ? depth0._source : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_source","hash":{},"data":data}) : helper)))
    + "\" type=\"video/mp4\">\n                            <source src=\""
    + escapeExpression(((helper = (helper = helpers._source || (depth0 != null ? depth0._source : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_source","hash":{},"data":data}) : helper)))
    + "\" type=\"video/ogg\">\n                        </video>\n";
},"25":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                        <div class=\"embeddedLink-lightBox-iframe-parent\">\n                        <iframe scrolling=\"no\" class=\"embeddedLink-lightBox-popup\" src=\""
    + escapeExpression(((helper = (helper = helpers._source || (depth0 != null ? depth0._source : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_source","hash":{},"data":data}) : helper)))
    + "\">\n                        </iframe>\n                        </div>\n";
},"27":function(depth0,helpers,partials,data) {
  return "                    <i class=\"icon icon-expand\"></i>\n";
  },"29":function(depth0,helpers,partials,data) {
  return "                    <i class=\"icon icon-popup\"></i>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, buffer = "<div class=\"embeddedLink-inner component-inner\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"component-widget embeddedLink-widget\">\n\n        <div class=\"embeddedLink-description-container ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isPartOfVerticalBlockSlider : depth0), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._hasPagination : depth0), {"name":"if","hash":{},"fn":this.program(3, data, depths),"inverse":this.program(7, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            <div class=\"embeddedLink-description\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._page : depth0)) != null ? stack1.title : stack1), {"name":"if","hash":{},"fn":this.program(10, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                <div class=\"page-body pageText-1\">";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._page : depth0)) != null ? stack1.body : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n            </div>\n            <div class=\"embeddedLink-audio-container\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._page : depth0)) != null ? stack1.audioSrc : stack1), {"name":"if","hash":{},"fn":this.program(12, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n        </div>\n\n        <div class=\"embeddedLink-iframe-holder\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isImage : depth0), {"name":"if","hash":{},"fn":this.program(15, data, depths),"inverse":this.program(17, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isLightBox : depth0), {"name":"if","hash":{},"fn":this.program(22, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n\n            <div class=\"embeddedLink-zoomin-button\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isDocument : depth0), {"name":"if","hash":{},"fn":this.program(27, data, depths),"inverse":this.program(29, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["focalpointGenerator"] = Handlebars.template({"1":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                <div class=\"focalpointGenerator-highlight component-item item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + " clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._graphic : depth0), {"name":"each","hash":{},"fn":this.program(2, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(4, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                    <div class=\"dragAndDrop-dummy\" style=\"max-width:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1._width : stack1), depth0))
    + "%; height:auto; background-color: red\";></div>\n                </div>\n";
},"2":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "                        <div class=\"focalpointGenerator-highlight-graphic\">\n                            <div class=\"focalpointGenerator-item-graphic-inner\" style=\"position:absolute;top:"
    + escapeExpression(((helper = (helper = helpers._highlightTop || (depth0 != null ? depth0._highlightTop : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_highlightTop","hash":{},"data":data}) : helper)))
    + "%; left:"
    + escapeExpression(((helper = (helper = helpers._highlightLeft || (depth0 != null ? depth0._highlightLeft : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_highlightLeft","hash":{},"data":data}) : helper)))
    + "%;height: "
    + escapeExpression(((helper = (helper = helpers._highlightHeight || (depth0 != null ? depth0._highlightHeight : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_highlightHeight","hash":{},"data":data}) : helper)))
    + "%;width: "
    + escapeExpression(((helper = (helper = helpers._highlightWidth || (depth0 != null ? depth0._highlightWidth : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_highlightWidth","hash":{},"data":data}) : helper)))
    + "%;\" data-width=\""
    + escapeExpression(((helper = (helper = helpers._highlightWidth || (depth0 != null ? depth0._highlightWidth : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_highlightWidth","hash":{},"data":data}) : helper)))
    + "\" data-height=\""
    + escapeExpression(((helper = (helper = helpers._highlightHeight || (depth0 != null ? depth0._highlightHeight : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_highlightHeight","hash":{},"data":data}) : helper)))
    + "\">\n                                 <img src=\""
    + escapeExpression(lambda(((stack1 = (depths[2] != null ? depths[2]._graphic : depths[2])) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"alt","hash":{},"data":data}) : helper)))
    + "\" data-left=\""
    + escapeExpression(((helper = (helper = helpers._highlightLeft || (depth0 != null ? depth0._highlightLeft : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_highlightLeft","hash":{},"data":data}) : helper)))
    + "\" data-top=\""
    + escapeExpression(((helper = (helper = helpers._highlightTop || (depth0 != null ? depth0._highlightTop : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_highlightTop","hash":{},"data":data}) : helper)))
    + "\" style=\"height: 20px;top: -"
    + escapeExpression(((helper = (helper = helpers._highlightTop || (depth0 != null ? depth0._highlightTop : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_highlightTop","hash":{},"data":data}) : helper)))
    + "%; left:-"
    + escapeExpression(((helper = (helper = helpers._highlightLeft || (depth0 != null ? depth0._highlightLeft : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_highlightLeft","hash":{},"data":data}) : helper)))
    + "%\">\n                            </div>\n                        </div>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "                    <div class=\"focalpointGenerator-highlight-body\" style=\"position:absolute;top:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1._top : stack1), depth0))
    + "%; left:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1._left : stack1), depth0))
    + "%;width:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1._width : stack1), depth0))
    + "%;line-height:initial;\" data-id=\"highlight-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n                        <div class=\"focalpointGenerator-item-body-inner\">\n                            <p>\n                                ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.body : depth0)) != null ? stack1.description : stack1), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                            </p>\n                        </div>\n                    </div>\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <a href=\"#\" class=\"focalpointGenerator-button component-item-text-color ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-id=\"item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" role=\"button\">\n                    <div class=\"focalpointGenerator-button-icon component-item-color\"><div class=\"focalpointGenerator-button-icon-style\">";
  stack1 = ((helper = (helper = helpers.button || (depth0 != null ? depth0.button : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"button","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div></div>\n                </a>\n";
},"7":function(depth0,helpers,partials,data) {
  return "visited";
  },"9":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, functionType="function", buffer = "\n            <a href=\"#\" class=\"focalpointGenerator-graphic-pin component-item-text-color ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" data-id=\""
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" style=\"top:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._narrativegraphic : depth0)) != null ? stack1._highlightTop : stack1), depth0))
    + "%; left:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._narrativegraphic : depth0)) != null ? stack1._highlightLeft : stack1), depth0))
    + "%;width:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._narrativegraphic : depth0)) != null ? stack1._highlightWidth : stack1), depth0))
    + "%; height:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._narrativegraphic : depth0)) != null ? stack1._highlightHeight : stack1), depth0))
    + "%;\" role=\"button\" aria-label=\"Item "
    + escapeExpression(((helpers.numbers || (depth0 && depth0.numbers) || helperMissing).call(depth0, (data && data.index), {"name":"numbers","hash":{},"data":data})))
    + ". "
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + ".\">\n                <div class=\"focalpointGenerator-graphic-pin-icon\"></div>\n            </a>\n";
},"11":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "\n                    <a href=\"#\" role=\"button\" class=\"focalpointGenerator-strapline-title\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strapline","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                        <div class=\"focalpointGenerator-strapline-title-inner accessible-text-block h5\">\n                            ";
  stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strapline","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                        </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                    </a>\n\n";
},"12":function(depth0,helpers,partials,data) {
  return "                        <div class=\"icon icon-plus\"></div>\n                        <div class=\"focus-rect\"></div>\n";
  },"14":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                <div class=\"focalpointGenerator-slider-graphic ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.visited : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"focalpointGenerator-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._focalpointGenerator : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"focalpointGenerator-widget component-widget\">\n\n        <div class=\"focalpointGenerator-body-container\">\n            <div class=\"focalpointGenerator-image-container\">\n\n                <div class=\"highlight-shadow\"></div>\n                <img class=\"focalpointGenerator-background-image\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"/>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n\n            <div class=\"focalpointGenerator-button-container\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n\n        <div class=\"focalpointGenerator-strapline\">\n            <div class=\"focalpointGenerator-strapline-header\">\n                <div class=\"focalpointGenerator-strapline-header-inner clearfix\">\n                    <div></div>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(11, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </div>\n            </div>\n        </div>\n\n        <div class=\"focalpointGenerator-slide-container\">\n            <a href=\"#\" class=\"focalpointGenerator-controls focalpointGenerator-control-left\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n                <div class=\"icon icon-controls-left\"></div>\n            </a>\n            <a href=\"#\" class=\"focalpointGenerator-controls focalpointGenerator-control-right\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n                <div class=\"icon icon-controls-right\"></div>\n            </a>\n\n            <div class=\"focalpointGenerator-slider clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(14, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n\n        </div>\n        <div class=\"clearfix\"></div>\n\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["hotSpot"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "before-submit";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  return "correct";
  },"7":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "        <div class=\"hotSpot-item component-item-text-color component-item ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isSelected : depth0), {"name":"if","hash":{},"fn":this.program(11, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" style=\"width:"
    + escapeExpression(((helper = (helper = helpers._width || (depth0 != null ? depth0._width : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_width","hash":{},"data":data}) : helper)))
    + "%;height: "
    + escapeExpression(((helper = (helper = helpers._height || (depth0 != null ? depth0._height : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_height","hash":{},"data":data}) : helper)))
    + "%;top:";
  stack1 = ((helper = (helper = helpers._top || (depth0 != null ? depth0._top : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_top","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "%; left:";
  stack1 = ((helper = (helper = helpers._left || (depth0 != null ? depth0._left : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_left","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "%;\" aria-labelledby=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\">\n\n            <div class=\"hotSpot-graphic-pin ";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1]._isRadio : depths[1]), {"name":"if","hash":{},"fn":this.program(13, data, depths),"inverse":this.program(15, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                <div class=\"hotSpot-graphic-pin-icon component-item-color icon icon-pin\">\n                </div>\n            </div>\n        </div>\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"9":function(depth0,helpers,partials,data) {
  return "incorrect";
  },"11":function(depth0,helpers,partials,data) {
  return "selected";
  },"13":function(depth0,helpers,partials,data) {
  return " radio ";
  },"15":function(depth0,helpers,partials,data) {
  return " checkbox";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"hotSpot-inner component-inner\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"hotSpot-widget component-widget clearfix ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isSubmitted : depth0), {"name":"unless","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n        <img class=\"hotSpot-background-image\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._backgroundImage : depth0)) != null ? stack1.url : stack1), depth0))
    + "\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n    <div class=\"buttons\">\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["iframewithedgeAnimate"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " scale";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"iframewithedgeAnimate-inner component-inner\" role=\"region\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"component-widget iframewithedgeAnimate-widget\">\n    <div class=\"iframewithedgeAnimate-iframe-holder\">\n      <iframe name='edge-frame' scrolling=\"no\" class=\"iframewithedgeAnimate-iframe";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._edge : depth0)) != null ? stack1._shouldScale : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._edge : depth0)) != null ? stack1._source : stack1), depth0))
    + "\" style=\"width:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._edge : depth0)) != null ? stack1._width : stack1), depth0))
    + "px; height:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._edge : depth0)) != null ? stack1._height : stack1), depth0))
    + "px;\">\n      </iframe>\n    </div>\n    <div class=\"iframewithedgeAnimate-controllers clearfix\">\n        <div class=\"iframewithedgeAnimate-playpause\">\n            <div class=\"fa fa-play\"></div>\n        </div>\n        <div class=\"iframewithedgeAnimate-timetrail\">\n            <span class=\"iframewithedgeAnimate-bar\">\n                <span class=\"iframewithedgeAnimate-current\"></span>\n                <span class=\"iframewithedgeAnimate-handle\"></span>\n            </span>\n        </div>\n    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["labelGenerator"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"2":function(depth0,helpers,partials,data) {
  return " complete ";
  },"4":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "        <div id=\"item-"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"labelGenerator-item component-item-text-color component-item \" style=\"top:"
    + escapeExpression(((helper = (helper = helpers._itemTop || (depth0 != null ? depth0._itemTop : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_itemTop","hash":{},"data":data}) : helper)))
    + "%; left:"
    + escapeExpression(((helper = (helper = helpers._itemLeft || (depth0 != null ? depth0._itemLeft : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_itemLeft","hash":{},"data":data}) : helper)))
    + "%;\" >\n\n            <div class=\"labelGenerator-popup-container "
    + escapeExpression(((helper = (helper = helpers._popupPosition || (depth0 != null ? depth0._popupPosition : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_popupPosition","hash":{},"data":data}) : helper)))
    + "\" style=\"width:"
    + escapeExpression(((helper = (helper = helpers.popupContainerWidth || (depth0 != null ? depth0.popupContainerWidth : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"popupContainerWidth","hash":{},"data":data}) : helper)))
    + "px;\">\n                <div class=\"labelGenerator-graphic-pin\"> </div>\n                <div class=\"popup-line\" style=\"width:"
    + escapeExpression(((helper = (helper = helpers.width || (depth0 != null ? depth0.width : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"width","hash":{},"data":data}) : helper)))
    + "px;\"></div>\n                <div class=\"popup-open\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._hasExtraDescription : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </div>\n            </div>\n\n        </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isHighlightEnable : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <div class=\"popup-text\" style=\"float:left; margin-right: 20px;\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n                    <div class=\"popup-with-add-sign icon icon-plus iconPlus\"></div>\n";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <div class=\"popup-text\" style=\"float:left;\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"9":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <div class=\"highlight-"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + " labelGenerator-highlight \" style=\"width: "
    + escapeExpression(((helper = (helper = helpers._highlightWidth || (depth0 != null ? depth0._highlightWidth : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_highlightWidth","hash":{},"data":data}) : helper)))
    + "%; height:"
    + escapeExpression(((helper = (helper = helpers._highlightHeight || (depth0 != null ? depth0._highlightHeight : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_highlightHeight","hash":{},"data":data}) : helper)))
    + "%; top:"
    + escapeExpression(((helper = (helper = helpers._highlightTop || (depth0 != null ? depth0._highlightTop : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_highlightTop","hash":{},"data":data}) : helper)))
    + "%;left:"
    + escapeExpression(((helper = (helper = helpers._highlightLeft || (depth0 != null ? depth0._highlightLeft : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_highlightLeft","hash":{},"data":data}) : helper)))
    + "%\">\n            </div>\n";
},"11":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._hasExtraDescription : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"12":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <div id=\"moreDesc-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"popup-with-add-sign-open hideMoreDescription\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                    <i class=\"moreDescription-container-close fa fa-times\" aria-hidden=\"true\"></i>\n                </div>\n";
},"13":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                        <div class=\"popup-item-body\">";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"15":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                    <div class=\"popup-with-add-sign-image\"><img class=\"popup-more-image\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\"/></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"labelGenerator-inner component-inner\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"labelGenerator-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n        <img class=\"labelGenerator-background-image\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\">\n        <div class=\"labelGenerator-item-container\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"highlight-moreDescription-container\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        <div class=\"dragAndDrop-dummy display-none\" ></div>\n        </div>\n        <div class=\"showHideAll\">"
    + escapeExpression(((helper = (helper = helpers._hidePopupText || (depth0 != null ? depth0._hidePopupText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_hidePopupText","hash":{},"data":data}) : helper)))
    + "</div>\n    </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["narrativeWithEdgeAnimation"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  return "narrative-text-controls";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <div class=\"narrative-content-item\">\n                    <div class=\"narrative-content-title\">\n                        <div class=\"narrative-content-title-inner accessible-text-block h5\" role=\"heading\" aria-level=\"5\" tabindex=\"0\">\n                            ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                        </div>\n                    </div>\n                    <div class=\"narrative-content-body\">\n                        <div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.bodySrc : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                        </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                    </div>\n                </div>\n";
},"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                            <img src=\""
    + escapeExpression(((helper = (helper = helpers.bodySrc || (depth0 != null ? depth0.bodySrc : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bodySrc","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"0\"/>\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "                        <div class=\"narrative-content-body-inner\">\n                            ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                        </div>\n";
},"10":function(depth0,helpers,partials,data) {
  return "                        <div class=\"narrative-progress component-item-color component-item-border\"></div>\n";
  },"12":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                    <button role=\"button\" class=\"base narrative-strapline-title\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strapline","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                    <div class=\"narrative-strapline-title-inner accessible-text-block h5\">\n                        ";
  stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strapline","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                    </div>\n                    <div class=\"icon icon-plus\"></div>\n                    <div class=\"focus-rect\"></div>\n                    </button>\n";
},"14":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "                <div class=\"narrative-slider-graphic ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.visited : depth0), {"name":"if","hash":{},"fn":this.program(15, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._iframe : depth0)) != null ? stack1.src : stack1), {"name":"if","hash":{},"fn":this.program(17, data, depths),"inverse":this.program(20, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </div>\n";
},"15":function(depth0,helpers,partials,data) {
  return "visited";
  },"17":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depths[2] != null ? depths[2]._isDesktop : depths[2]), {"name":"if","hash":{},"fn":this.program(18, data, depths),"inverse":this.program(20, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"18":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                    <div class=\"scroll-wrapper\">\n                        <iframe name='narrative-frame' scrolling=\"no\" class=\"scale\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._iframe : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" style=\"width:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._iframe : depth0)) != null ? stack1._width : stack1), depth0))
    + "px; height:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._iframe : depth0)) != null ? stack1._height : stack1), depth0))
    + "px;\">\n                        </iframe>\n                    </div>\n";
},"20":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                    <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), {"name":"if","hash":{},"fn":this.program(21, data),"inverse":this.program(23, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "/>\n";
},"21":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" tabindex=\"0\"";
},"23":function(depth0,helpers,partials,data) {
  return "class=\"a11y-ignore\" aria-hidden=\"true\" tabindex=\"-1\"";
  },"25":function(depth0,helpers,partials,data) {
  return "                <div class=\"narrative-progress component-item-color component-item-border\"></div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"narrativeWithEdgeAnimation-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._narrativeWithEdgeAnimation : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._narrativeWithEdgeAnimation : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"narrativeWithEdgeAnimation-widget component-widget ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._hasNavigationInTextArea : depth0), {"name":"if","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n        <div class=\"narrative-content\">\n            <div class=\"narrative-content-inner\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                <div class=\"narrative-controls-container clearfix\">\n                    <div class=\"narrative-indicators\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(10, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    </div>\n                    <button class=\"base narrative-controls narrative-control-left\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n                    <div class=\"icon icon-controls-left\"></div>\n                    </button>\n                    <button class=\"base narrative-controls narrative-control-right\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n                    <div class=\"icon icon-controls-right\"></div>\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"narrative-strapline\">\n            <div class=\"narrative-strapline-header\">\n                <div class=\"narrative-strapline-header-inner clearfix\">\n                    <div></div>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(12, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </div>\n            </div>\n        </div>\n        <div class=\"narrative-slide-container\">\n            <button class=\"base narrative-controls narrative-control-left\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n            <div class=\"icon icon-controls-left\"></div>\n            </button>\n            <button class=\"base narrative-controls narrative-control-right\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n            <div class=\"icon icon-controls-right\"></div>\n            </button>\n            <div class=\"narrative-slider clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(14, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n            <div class=\"narrative-indicators\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(25, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n        </div>\n        <div class=\"clearfix\"></div>\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["objectMatching"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  return "correct";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "            <div class=\"objectMatching-item-wrapper draggable-item-wrapper\">\n                <div class=\"objectMatching-item-wrapper-inner draggable-item-wrapper-inner default-border\">\n                    <div class=\"objectMatching-item draggable-item component-item component-item-color item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + " cursor-pointer\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n                        <div class=\"objectMatching-item-inner draggable-item-inner\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._graphic : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                        </div>\n                        <div class=\"objectMatching-item-index draggable-item-index\">\n                            "
    + escapeExpression(((helper = (helper = helpers._index || (depth0 != null ? depth0._index : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_index","hash":{},"data":data}) : helper)))
    + "\n                        </div>\n                    </div>\n                </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                            <div class=\"objectMatching-item-body draggable-item-body\">\n                                <div class=\"objectMatching-item-body-inner draggable-item-body-inner\">\n                                    ";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                                </div>\n                            </div>\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"11":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <div class=\"objectMatching-item-graphic draggable-item-graphic\">\n                                <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" tabindex=\"0\">\n                            </div>\n";
},"13":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <div class=\"objectMatching-item-title draggable-item-title\">\n                    <div class=\"objectMatching-item-title-inner draggable-item-title-inner\">\n                        ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                    </div>\n                </div>\n";
},"15":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "            <div class=\"objectMatching-item-wrapper droppable-item-wrapper ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(16, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                <div class=\"objectMatching-item-wrapper-inner droppable-item-wrapper-inner default-border\">\n                    <div class=\"objectMatching-item droppable-item component-item component-item-color item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n                        <div class=\"objectMatching-item-inner droppable-item-inner\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(21, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._graphic : depth0), {"name":"if","hash":{},"fn":this.program(23, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                        </div>\n                        <div class=\"objectMatching-item-index droppable-item-index\">\n                           "
    + escapeExpression(((helper = (helper = helpers._index || (depth0 != null ? depth0._index : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_index","hash":{},"data":data}) : helper)))
    + "\n                        </div>\n                    </div>\n                </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(26, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n";
},"16":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.program(19, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"17":function(depth0,helpers,partials,data) {
  return " correct";
  },"19":function(depth0,helpers,partials,data) {
  return " incorrect";
  },"21":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                            <div class=\"objectMatching-item-body droppable-item-body\">\n                                <div class=\"objectMatching-item-body-inner droppable-item-body-inner\">\n                                    ";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                                </div>\n                            </div>\n";
},"23":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), {"name":"if","hash":{},"fn":this.program(24, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"24":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <div class=\"objectMatching-item-graphic droppable-item-graphic\">\n                                <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" tabindex=\"0\">\n                            </div>\n";
},"26":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <div class=\"objectMatching-item-title droppable-item-title\">\n                    <div class=\"objectMatching-item-title-inner droppable-item-title-inner\">\n                        ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                    </div>\n                </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"objectMatching-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._objectMatching : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._objectMatching : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"objectMatching-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n        <div class=\"objectMatching-container draggables-container\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._draggableItems : depth0), {"name":"each","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n        <div class=\"objectMatching-container droppables-container\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._droppableItems : depth0), {"name":"each","hash":{},"fn":this.program(15, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n    </div>\n    <div class=\"buttons\">\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["blockNumericProgress"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"page-level-progress-numericCount-bar\"></div>\n<div class=\"page-level-progress-navigation-bar\">\n    <div class=\"page-level-progress-numericCount-bar-mask\"></div>\n</div>";
  },"useData":true});

this["Handlebars"]["templates"]["TOCNavigationView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"TOC-navigation-icon fa fa-bars\" role=\"button\" tabindex=\"0\"></div>\n";
  },"useData":true});

this["Handlebars"]["templates"]["TOCView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"TOC-container enabled modal\">\n    <div class=\"title\">\n    </div>\n    <div class=\"TOC-drawer\"></div>\n</div>\n";
  },"useData":true});

this["Handlebars"]["templates"]["wcn"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                    <a href=\"#\" class=\"wcn-audio\" tabindex=\"0\">\n                        <div class=\"wcnWithAudio-sound component-item-text-color icon icon-sound icon-sound-mute";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._audio_404 : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"></div>\n                    </a>\n";
},"2":function(depth0,helpers,partials,data) {
  return "audio_404";
  },"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                    <div class=\"wcn-item-audio audio\" tabindex=\"0\">\n                        <audio preload=\"none\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.audioTypes : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                        </audio>\n                    </div>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <source src=\""
    + escapeExpression(lambda((depth0 != null ? depth0.audioSrc : depth0), depth0))
    + "."
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.audioTypes : depth0)) != null ? stack1.type : stack1), depth0))
    + "\" type=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.audioTypes : depth0)) != null ? stack1.codec : stack1), depth0))
    + "\">\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                    <div class=\"wcn-inner\">\n                            <div class=\"wcn-title-inner warning-title warning\">\n                            ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0._warning : depth0)) != null ? stack1.title : stack1), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                            </div>\n                            <div class=\"title-inner\" tabindex=\"0\">\n                                "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._warning : depth0)) != null ? stack1.text : stack1), depth0))
    + "\n                            </div>\n                    </div>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                    <div class=\"wcn-inner\">\n                            <div class=\"wcn-title-inner caution-title  caution\" >\n                                 ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0._caution : depth0)) != null ? stack1.title : stack1), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                            </div>\n                            <div class=\"title-inner\" tabindex=\"0\">\n                             "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._caution : depth0)) != null ? stack1.text : stack1), depth0))
    + "\n                            </div>\n                    </div>\n";
},"11":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                <div class=\"wcn-inner\">\n                        <div class=\"wcn-title-inner note-title note\">\n                            ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0._note : depth0)) != null ? stack1.title : stack1), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                        </div>\n                        <div class=\"title-inner\" tabindex=\"0\">\n                            "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._note : depth0)) != null ? stack1.text : stack1), depth0))
    + "\n                        </div>\n                </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"wcn-inner\" >\n   <div class=\"wcn-inner-text\">\n    <div class=\"wcn-container \">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.audioSrc : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.audioSrc : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        <div class=\"wcn-bodyText\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._warning : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._caution : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._note : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n     </div>\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["blockAutoPlay"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "	<a href=\"#\" class=\"volume-control\">\n		<i class=\"volume-control-off fa fa-volume-off\"></i>\n		<i class=\"volume-control-on fa fa-volume-up\"></i>\n	</a>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._blockAutoPlay : depth0)) != null ? stack1._audioSrc : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "		<audio src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._blockAutoPlay : depth0)) != null ? stack1._audioSrc : stack1), depth0))
    + "\" preload=\"auto\" class=\"block-audio\" style=\"display: none;\"></audio>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._blockAutoPlay : depth0)) != null ? stack1._showAudio : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

this["Handlebars"]["templates"]["blockBulletWCNView"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                    <div class=\"blockBulletWCN-inner-warning\">\n                            <div class=\"blockBulletWCN-title-inner warning-title warning\">\n                            ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0._warning : depth0)) != null ? stack1.title : stack1), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                            </div>\n                            <div class=\"title-inner\" tabindex=\"0\">\n                                "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._warning : depth0)) != null ? stack1.text : stack1), depth0))
    + "\n                            </div>\n                    </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                    <div class=\"blockBulletWCN-inner-caution\">\n                            <div class=\"blockBulletWCN-title-inner caution-title  caution\" >\n                                 ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0._caution : depth0)) != null ? stack1.title : stack1), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                            </div>\n                            <div class=\"title-inner\" tabindex=\"0\">\n                             "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._caution : depth0)) != null ? stack1.text : stack1), depth0))
    + "\n                            </div>\n                    </div>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                <div class=\"blockBulletWCN-inner-note\">\n                        <div class=\"blockBulletWCN-title-inner note-title note\">\n                            ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0._note : depth0)) != null ? stack1.title : stack1), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                        </div>\n                        <div class=\"title-inner\" tabindex=\"0\">\n                            "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._note : depth0)) != null ? stack1.text : stack1), depth0))
    + "\n                        </div>\n                </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"blockBulletWCN-inner no-text-area\" >\n   <div class=\"close-minimize-bar display-none\">\n        <i class=\"bullet-text-close fa fa-times\" aria-hidden=\"true\"></i>\n   </div>\n   <div class=\"blockBulletWCN-inner-text\">\n        <div class=\"blockBulletWCN-bodyText\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._warning : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._caution : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._note : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n    </div>\n      <div class=\"save-and-resize-btn display-none\">\n        <i class=\"bullet-text-save fa fa-floppy-o\"></i>\n        <i class=\"bullet-text-resize fa fa-crosshairs\"></i>\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["bulletsPlusIconView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n    <i class=\"fa fa-plus bullet-text-plus display-none\"  aria-hidden=\"true\"></i>\n    <i class=\"fa fa-minus bullet-text-minus\"  aria-hidden=\"true\"></i>\n\n";
  },"useData":true});

this["Handlebars"]["templates"]["bulletsView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"block-content-items-bullets no-text-area\" data=\"bullet-text-section\">\n    <div class=\"close-minimize-bar display-none\">\n        <i class=\"bullet-text-close fa fa-times\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"bullet-text\">\n        <i class=\"bullet-text-save fa fa-floppy-o display-none\"></i>\n        <i class=\"bullet-text-resize fa fa-crosshairs display-none\"></i>\n    </div>\n</div>\n   \n";
  },"useData":true});

this["Handlebars"]["templates"]["blockContentItemsInfoView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"block-content-items-info\">\n    <div class=\"block-content-items-info-inner maximize\" >\n      <img class=\"block-content-items-info-logo\">\n      <div class=\"block-content-items-info-title module-name\"></div>\n    </div>\n</div>\n";
  },"useData":true});

this["Handlebars"]["templates"]["blockContentItemsNavigationView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class='blockContentItems-inner'>\n    <div class='navigation-block-content'>\n        <a class=\"block-content-item navigation-TOC-button-expandationNav fa fa-bars display-none\" role=\"button\" tabindex=\"0\"></a>\n        <a class=\"block-content-item navigation-speaker-note-button fa fa-list-alt\" role=\"button\" tabindex=\"0\" ></a>\n        <a class=\"block-content-item navigation-info-button fa fa-info-circle\" role=\"button\" tabindex=\"0\"></a>\n    </div>\n    <div class='reply-all fa fa-reply-all'></div>\n    \n</div>\n";
  },"useData":true});

this["Handlebars"]["templates"]["blockContentItemsTOCIconView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"block-content-item-TOC navigation-TOC-button fa fa-bars\" role=\"button\" tabindex=\"0\"></div>\n";
  },"useData":true});

this["Handlebars"]["templates"]["blockContentItemsTOCView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"block-content-TOC-container enabled\">\n    <div class=\"title\">\n        <div class='TOC-title'><h3>Table Of Content</h3></div>\n    </div>\n</div>\n";
  },"useData":true});

this["Handlebars"]["templates"]["blockIdentifier"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "              "
    + escapeExpression(((helper = (helper = helpers._identifier || (depth0 != null ? depth0._identifier : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_identifier","hash":{},"data":data}) : helper)))
    + "\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "              "
    + escapeExpression(((helper = (helper = helpers._trackingId || (depth0 != null ? depth0._trackingId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_trackingId","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"block-identifier-inner\">\n  <div class=\"block-identifier-item\">\n      <div class=\"block-identifier-graphic\">\n          <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._blockIdentifier : depth0)) != null ? stack1._graphicSrc : stack1), depth0))
    + "\">\n      </div>\n      <div class=\"block-identifier-text\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._identifier : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "      </div>\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["blockLevelProgress"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "    <div class=\"block-level-progress-item drawer-item\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisible : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        	<h5 class=\"block-level-progress-item-title-inner\">\n            ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n            </h5>\n            <div class=\"block-level-progress-indicator block-level-progress-indicator-";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                <div class=\"block-level-progress-indicator-bar\">\n                </div>\n            </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisible : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.program(12, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <a class=\"block-level-progress-item-title clearfix drawer-item-open\" href=\"#\" data-block-level-progress-id=\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n";
},"4":function(depth0,helpers,partials,data) {
  return "        <div class=\"block-level-progress-item-title drawer-item-open disabled clearfix\">\n";
  },"6":function(depth0,helpers,partials,data) {
  return "complete";
  },"8":function(depth0,helpers,partials,data) {
  return "incomplete";
  },"10":function(depth0,helpers,partials,data) {
  return "        </a>\n";
  },"12":function(depth0,helpers,partials,data) {
  return "        </div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"block-level-progress-inner\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.blocks : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["blockLevelProgressNavigation"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"block-level-progress-navigation-completion\">\n	<div class=\"block-level-progress-navigation-bar\">\n	</div>\n</div>\n";
  },"useData":true});

this["Handlebars"]["templates"]["pageLevelProgress"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isPartOfAssessment : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(26, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "            <div role=\"listitem\" class=\"page-level-progress-item drawer-item\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisible : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    <div class=\"page-level-progress-item-title-inner accessible-text-block h5\">\n                    ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                    </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.program(17, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisible : depth0), {"name":"if","hash":{},"fn":this.program(22, data),"inverse":this.program(24, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                <button class=\"base page-level-progress-item-title clearfix drawer-item-open\" tabindex=\"0\" role=\"button\" data-page-level-progress-id=\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\" aria-label=\""
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0));
  },"8":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0));
  },"10":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <div class=\"page-level-progress-item-title drawer-item-open disabled clearfix\">\n                    <span class=\"aria-label prevent-default\" tabindex=\"0\" role=\"button\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.locked : stack1), depth0))
    + ". "
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                        <div class=\"page-level-progress-indicator page-level-progress-indicator-";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                            <div class=\"page-level-progress-indicator-bar\">\n                            </div>\n                        </div>\n";
},"13":function(depth0,helpers,partials,data) {
  return "complete";
  },"15":function(depth0,helpers,partials,data) {
  return "incomplete";
  },"17":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isOptional : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.program(20, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"18":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <div class=\"page-level-progress-item-optional-text\">\n                            "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.optionalContent : stack1), depth0))
    + "\n                            </div>\n";
},"20":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                            <div class=\"page-level-progress-indicator page-level-progress-indicator-";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                                <div class=\"page-level-progress-indicator-bar\">\n                                </div>\n                            </div>\n";
},"22":function(depth0,helpers,partials,data) {
  return "                </button>\n";
  },"24":function(depth0,helpers,partials,data) {
  return "                </div>\n";
  },"26":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "            <div role=\"listitem\" class=\"page-level-progress-item drawer-item\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisible : depth0), {"name":"if","hash":{},"fn":this.program(27, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    <div class=\"page-level-progress-item-title-inner accessible-text-block h5\">\n                    ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                    </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(29, data),"inverse":this.program(31, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisible : depth0), {"name":"if","hash":{},"fn":this.program(22, data),"inverse":this.program(24, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n";
},"27":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                <button class=\"base page-level-progress-item-title clearfix drawer-item-open\" tabindex=\"0\" role=\"button\" data-page-level-progress-id=\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\" aria-label=\""
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n";
},"29":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                        <div class=\"page-level-progress-indicator page-level-progress-indicator-";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                            <div class=\"page-level-progress-indicator-bar\">\n                            </div>\n                        </div>\n";
},"31":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isOptional : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.program(32, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"32":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                            <div class=\"page-level-progress-indicator page-level-progress-indicator-";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                                <div class=\"page-level-progress-indicator-bar\">\n                                </div>\n                            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"page-level-progress-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.pageLevelProgress : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.pageLevelProgress : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n    <div role=\"list\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.components : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n    <div class=\"aria-label a11y-ignore-focus prevent-default\" tabindex=\"0\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.pageLevelProgressEnd : stack1), depth0))
    + "\"/>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressMenu"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"page-level-progress-menu-item-indicator\">\n	<div class=\"page-level-progress-menu-item-indicator-bar\" style=\"width:"
    + escapeExpression(((helper = (helper = helpers.completedChildrenAsPercentage || (depth0 != null ? depth0.completedChildrenAsPercentage : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"completedChildrenAsPercentage","hash":{},"data":data}) : helper)))
    + "%\"><span class=\"aria-label\" role=\"region\" tabindex=\"0\"></span></div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressNavigation"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"page-level-progress-navigation-completion\">\n    <div class=\"page-level-progress-navigation-bar\"></div>\n</div>\n<a href=\"#\" class=\"block-level-progress-drawer-toggle-button fa fa-bars\" alt=\"Table of Contents\"></a>\n";
  },"useData":true});

this["Handlebars"]["templates"]["resources"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "			<button class=\"base resources-show-all selected\" data-filter=\"all\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.allAria : stack1), depth0))
    + "\" tabindex=\"0\" role=\"button\">\n				<span>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.all : stack1), depth0))
    + "</span>\n			</button>\n";
  stack1 = ((helpers.if_collection_contains || (depth0 && depth0.if_collection_contains) || helperMissing).call(depth0, (depth0 != null ? depth0.resources : depth0), "_type", "document", {"name":"if_collection_contains","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.if_collection_contains || (depth0 && depth0.if_collection_contains) || helperMissing).call(depth0, (depth0 != null ? depth0.resources : depth0), "_type", "media", {"name":"if_collection_contains","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.if_collection_contains || (depth0 && depth0.if_collection_contains) || helperMissing).call(depth0, (depth0 != null ? depth0.resources : depth0), "_type", "link", {"name":"if_collection_contains","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<button class=\"base resources-show-document\" data-filter=\"document\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.documentAria : stack1), depth0))
    + "\" tabindex=\"0\" role=\"button\">\n				<span>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.document : stack1), depth0))
    + "</span>\n			</button>\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<button class=\"base resources-show-media\" data-filter=\"media\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.mediaAria : stack1), depth0))
    + "\" tabindex=\"0\" role=\"button\">\n				<span>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.media : stack1), depth0))
    + "</span>\n			</button>\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<button class=\"base resources-show-link\" data-filter=\"link\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.linkAria : stack1), depth0))
    + "\" tabindex=\"0\" role=\"button\">\n				<span>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.link : stack1), depth0))
    + "</span>\n			</button>\n";
},"10":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "	<div class=\"resources-item drawer-item "
    + escapeExpression(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_type","hash":{},"data":data}) : helper)))
    + "\">\n		<button class=\"base resources-item-open drawer-item-open\" data-href=\""
    + escapeExpression(((helper = (helper = helpers._link || (depth0 != null ? depth0._link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_link","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"0\" role=\"button\" aria-label=\""
    + escapeExpression(helpers.lookup.call(depth0, ((stack1 = (depths[1] != null ? depths[1].model : depths[1])) != null ? stack1._filterButtons : stack1), (depth0 != null ? depth0._type : depth0), {"name":"lookup","hash":{},"data":data}))
    + ". "
    + escapeExpression(lambda(((stack1 = (depths[1] != null ? depths[1].model : depths[1])) != null ? stack1.itemAriaExternal : stack1), depth0))
    + ". ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += ". ";
  stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n			<div class=\"drawer-item-title\">\n				<div class=\"drawer-item-title-inner h5\">";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n			</div>\n			<div class=\"drawer-item-description\">\n				<div class=\"drawer-item-description-inner\">";
  stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n			</div>\n		</button>\n	</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<div class=\"resources-inner\" role=\"complementary\">\n	<div class=\"resources-filter clearfix resources-col-"
    + escapeExpression(((helpers.return_column_layout_from_collection_length || (depth0 && depth0.return_column_layout_from_collection_length) || helperMissing).call(depth0, (depth0 != null ? depth0.resources : depth0), "_type", {"name":"return_column_layout_from_collection_length","hash":{},"data":data})))
    + "\">\n";
  stack1 = ((helpers.if_collection_contains_only_one_item || (depth0 && depth0.if_collection_contains_only_one_item) || helperMissing).call(depth0, (depth0 != null ? depth0.resources : depth0), "_type", {"name":"if_collection_contains_only_one_item","hash":{},"fn":this.program(1, data, depths),"inverse":this.program(3, data, depths),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</div>\n	<div class=\"resources-item-container\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.resources : depth0), {"name":"each","hash":{},"fn":this.program(10, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\n	<div class=\"aria-label a11y-ignore-focus prevent-default\" tabindex=\"0\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._resources : stack1)) != null ? stack1.resourcesEnd : stack1), depth0))
    + "\"/>\n</div>\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["trickle-button"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " locking";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"trickle-button-inner component-inner";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isLocking : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n        <button role=\"button\" class=\"button\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.text : stack1), depth0))
    + "</button>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["didYouKnow-button"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"didYouKnow-button-inner\" tabindex=\"0\">\n    <button class=\"base didYouKnow-button\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._button : depth0)) != null ? stack1.text : stack1), depth0))
    + "</button>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["didYouKnow-popup"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <div class=\"popup-title\">\n                <div class=\"popup-title-inner\" tabindex=\"-1\" role=\"heading\" aria-level=\"1\" aria-hidden=\"true\">\n                    "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._popup : depth0)) != null ? stack1.title : stack1), depth0))
    + "\n                </div>\n            </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <div class=\"popup-body\">\n                <div class=\"popup-body-inner\">\n                    "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._popup : depth0)) != null ? stack1.body : stack1), depth0))
    + "\n                </div>\n            </div>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <div class=\"popup-graphic\">\n                <div class=\"popup-graphic-inner\">\n                    <img src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._popup : depth0)) != null ? stack1._graphic : stack1)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._popup : depth0)) != null ? stack1._graphic : stack1)) != null ? stack1.alt : stack1), depth0))
    + "\">\n                </div>\n            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"didYouKnow-popup-inner\">\n    <div class=\"popup-toolbar\">\n        <div class=\"popup-toolbar-inner clearfix\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._popup : depth0)) != null ? stack1.title : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            <button class=\"base popup-close\" tabindex=\"0\">\n                <div class=\"icon icon-cross\"></div>\n            </button>\n        </div>\n    </div>\n    <div class=\"popup-content\">\n        <div class=\"popup-content-inner\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._popup : depth0)) != null ? stack1.body : stack1), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._popup : depth0)) != null ? stack1._graphic : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["expandableNavBar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"expandableNavBar-inner\">\n    <div class=\"expandableNavBar-icon\">\n        <div class=\"expandableNavBar-navigation left fa fa-chevron-circle-left\" data-event='navigation-left'></div>\n        <div class=\"expandableNavBar-navigation right fa fa-chevron-circle-right display-none\"></div>\n    </div>\n</div>\n";
  },"useData":true});

this["Handlebars"]["templates"]["navigationDrawer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div style=\"display: none;\" class=\"navigationDrawer-inner\">\n    <ul class=\"button-container\">\n    </ul>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["navigationDrawerControl"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"navigationDrawerControl-inner\">\n    <i class=\"icon icon-grid\"></i>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["navigationDrawerView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<li class=\"shareaholic-share-button has-shares\">\n    <div class=\"shareaholic-share-button-container\">\n        <a href=\"javascript:void(0);\" class=\"fa fa-inbox\"></a>\n    </div>\n</li>\n";
},"useData":true});

this["Handlebars"]["templates"]["panZoom"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"panZoom-container\">\n<div class=\"zoom-in buttons fa fa-search-plus\"></div>\n<div class=\"zoom-out buttons display-none\">Zoom Out</div>\n<div class=\"reset buttons display-none fa fa-refresh\"></div>\n</div>\n";
  },"useData":true});

this["Handlebars"]["templates"]["progressTracking"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "complete";
  },"3":function(depth0,helpers,partials,data) {
  return "inComplete";
  },"5":function(depth0,helpers,partials,data) {
  return "pointer;";
  },"7":function(depth0,helpers,partials,data) {
  return "default;";
  },"9":function(depth0,helpers,partials,data) {
  var stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", blockHelperMissing=helpers.blockHelperMissing, buffer = "";
  stack1 = ((helpers['case'] || (depth0 && depth0['case']) || helperMissing).call(depth0, "required", {"name":"case","hash":{
    'break': (true)
  },"fn":this.program(10, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers['case'] || (depth0 && depth0['case']) || helperMissing).call(depth0, "additional", {"name":"case","hash":{
    'break': (true)
  },"fn":this.program(13, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers['default'] || (depth0 != null ? depth0['default'] : depth0)) != null ? helper : helperMissing),(options={"name":"default","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['default']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  var stack1, buffer = "		        <div class=\"icon-exclamation fa fa-exclamation\"></div>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._progressTracking : depth0)) != null ? stack1._blockIcon : stack1)) != null ? stack1.isInteractive : stack1), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"11":function(depth0,helpers,partials,data) {
  return "                 <div class=\"intractiveHandPointer\">\n                    <div class=\"icon-intractiveHandPointer fa fa-hand-pointer-o\"></div>\n                 </div>\n";
  },"13":function(depth0,helpers,partials,data) {
  var stack1, buffer = "	          <div class=\"icon-lightbulb fa fa-lightbulb-o\"></div>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._progressTracking : depth0)) != null ? stack1._blockIcon : stack1)) != null ? stack1.isInteractive : stack1), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"14":function(depth0,helpers,partials,data) {
  return "	            <div class=\"intractiveHandPointer\">\n	              <div class=\"icon-intractiveHandPointer fa fa-hand-pointer-o\"></div>\n	            </div>\n";
  },"16":function(depth0,helpers,partials,data) {
  return "	         <div class=\"icon-handPointer fa fa-hand-pointer-o\"></div>\n";
  },"18":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "	    "
    + escapeExpression(helpers.log.call(depth0, (depth0 != null ? depth0.isTooltipAvailable : depth0), {"name":"log","hash":{},"data":data}))
    + "\n         <div class=\"tooltip visibility-hidden\">\n             <div class=\"tooltip-inner\">\n                 <span class=\"tooltipText\">";
  stack1 = lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._progressTracking : depth0)) != null ? stack1.tooltip : stack1)) != null ? stack1.description : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</span><br>\n                 <a href=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._progressTracking : depth0)) != null ? stack1.tooltip : stack1)) != null ? stack1.src : stack1), depth0))
    + "\">";
  stack1 = lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._progressTracking : depth0)) != null ? stack1.tooltip : stack1)) != null ? stack1.linkText : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</a>\n                 <div class=\"arrow_up\"><div class=\"arrow_up-inner\"></div></div>\n             </div>\n\n         </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<div class=\"progressTracking-inner\">\n     <div class=\"progressTracking-icon ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" style=\"cursor:";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isTooltipAvailable : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = ((helpers['switch'] || (depth0 && depth0['switch']) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._progressTracking : depth0)) != null ? stack1._blockIcon : stack1)) != null ? stack1.type : stack1), {"name":"switch","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isTooltipAvailable : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n\n\n</div>\n\n";
},"useData":true});

this["Handlebars"]["templates"]["verticalBlockSlider"] = Handlebars.template({"1":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._blocks : depth0), {"name":"each","hash":{},"fn":this.program(2, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depths[1] != null ? depths[1]._verticalBlockSlider : depths[1])) != null ? stack1._tabs : stack1)) != null ? stack1._useBlockTitle : stack1), {"name":"if","hash":{},"fn":this.program(3, data, depths),"inverse":this.program(5, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <a href=\"#\" class=\"verticalBlockSlider-tab verticalBlockSlider-text-tab verticalBlockSlider-tab-"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1._id : stack1), depth0))
    + " index-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" >\n                                "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.title : stack1), depth0))
    + "\n                            </a>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                                 <a id='"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1._id : stack1), depth0))
    + "' href=\"#\" class=\" verticalBlockSlider-tab  verticalBlockSlider-progress fa fa-circle-o verticalBlockSlider-progress verticalBlockSlider-tab-"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1._id : stack1), depth0))
    + " index-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n                                 </a>\n";
},"7":function(depth0,helpers,partials,data) {
  return "                <a href=\"#\" class=\"verticalBlockSlider-controls fa fa-arrow-up  verticalBlockSlider-control-left verticalBlockSlider-hidden\"></a>\n               <a href=\"#\" class=\"verticalBlockSlider-controls fa fa-arrow-down verticalBlockSlider-control-right verticalBlockSlider-hidden\"></a>\n\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "<div class=\"verticalBlockSlider-controls-container\">\n     <div class=\"verticalBlockSlider-controls-container-inner\">\n         <div class=\"verticalBlockSlider-controls-inner\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._verticalBlockSlider : depth0)) != null ? stack1._tabs : stack1)) != null ? stack1._isActive : stack1), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._verticalBlockSlider : depth0)) != null ? stack1._arrows : stack1)) != null ? stack1._isActive : stack1), {"name":"if","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "         </div>\n   </div>\n</div>\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["boxmenu-item"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" />\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.visited : stack1), depth0));
  },"7":function(depth0,helpers,partials,data) {
  return "visited";
  },"9":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "            <span class=\"menu-item-duration accessible-text-block\" role=\"region\" tabindex=\"0\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.durationLabel : stack1), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = ((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"duration","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda;
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.durationLabel : stack1), depth0);
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"menu-item-inner\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.menuItem : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.menuItem : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n    <div class=\"menu-item-graphic\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    </div>\n    <div class=\"menu-item-title\">\n        <div class=\"menu-item-title-inner h3 accessible-text-block\" role=\"heading\" aria-level=\"2\" tabindex=\"0\">";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n    </div>\n    <div class=\"menu-item-body\">\n        <div class=\"menu-item-body-inner\">";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n    </div>\n    <div class=\"menu-item-button\">\n        <button role=\"button\" aria-label=\""
    + escapeExpression(((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkText","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " accessible-text-block\">\n            ";
  stack1 = ((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n        </button>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.duration : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["boxmenu"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "				<div class=\"menu-title\">\n					<div class=\"menu-title-inner h1 accessible-text-block\" role=\"heading\" aria-level=\"1\" tabindex=\"0\">\n						";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					</div>\n				</div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "				<div class=\"menu-body\">\n					<div class=\"menu-body-inner accessible-text-block\">\n						";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					</div>\n				</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"menu-container\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n	<div class='menu-container-inner box-menu-inner clearfix'>\n		<div class=\"menu-header\">\n			<div class=\"menu-header-inner\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</div>\n		</div>\n	</div>\n	<div class=\"aria-label relative a11y-ignore-focus prevent-default\" tabindex=\"0\" role=\"region\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.menuEnd : stack1), depth0))
    + "</div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["article"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "        <div class=\"article-title\">\n            <div role=\"heading\" tabindex=\"0\" class=\"article-title-inner h2\"  aria-level=\"2\">\n                ";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </div>\n        </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "        <div class=\"article-body\">\n            <div class=\"article-body-inner\">\n                ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </div>\n        </div>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "        <div class=\"article-instruction\">\n            <div class=\"article-instruction-inner\">\n                ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </div>\n        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"article-inner block-container\">\n\n    <div class=\"article-header\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["block"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "        <div class=\"block-title\">\n            <div role=\"heading\" tabindex=\"0\" class=\"block-title-inner h3\"  aria-level=\"3\">\n                ";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </div>\n        </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "        <div class=\"block-body\">\n            <div class=\"block-body-inner\">\n                ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </div>\n        </div>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "        <div class=\"block-instruction\">\n            <div class=\"block-instruction-inner\">\n                ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </div>\n        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"block-inner\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n    <div class=\"component-container\">\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["blockLevelProgress"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "            <li class=\"tocItem\" id=\"block-"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\" data-target=\".block_"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\"  data-block-level-progress-id=\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n                <!-- img src=\"https://dl.dropboxusercontent.com/u/1143870/icons/train_white.svg\" -->\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._icon : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                <a class=\"label\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</a>\n            </li>\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <i class=\"fa "
    + escapeExpression(((helper = (helper = helpers._icon || (depth0 != null ? depth0._icon : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_icon","hash":{},"data":data}) : helper)))
    + " fa-lg  c-white\"></i>\n";
},"4":function(depth0,helpers,partials,data) {
  return "                    <i class=\"fa fa-plane fa-lg  c-white\"></i>\n";
  },"6":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "        <div class=\"content block_"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + " toc_detail_box\" data-block-level-progress-id=\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n            <!-- img src=\"https://dl.dropboxusercontent.com/u/1143870/icons/train_white.svg\" class=\"large\" -->\n            <div class=\"big_thumbnail\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._icon : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n            <h5>"
    + escapeExpression(((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper)))
    + "</h5>\n        </div>\n";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <i class=\"fa "
    + escapeExpression(((helper = (helper = helpers._icon || (depth0 != null ? depth0._icon : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_icon","hash":{},"data":data}) : helper)))
    + " fa-5x  c-white\"></i>\n";
},"9":function(depth0,helpers,partials,data) {
  return "                    <i class=\"fa fa-plane fa-5x  c-white\"></i>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"nav-container\">\n    <div class=\"block-level-progress-inner main\">\n        <ul>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.blocks : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </ul>\n    </div>\n    <section class=\"sub\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.blocks : depth0), {"name":"each","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </section>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["blockLevelProgressNavigation"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"block-level-progress-navigation-completion\">\n	<div class=\"block-level-progress-navigation-bar\">\n	</div>\n</div>\n<a href=\"#\" class=\"block-level-progress-drawer-toggle-button fa fa-bars\" alt=\"Table of Contents\"></a>\n";
  },"useData":true});

this["Handlebars"]["templates"]["bottomNavigation"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"navigation-inner clearfix\" style=\"background-color: "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._theme : stack1)) != null ? stack1.colorB : stack1), depth0))
    + "\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._theme : stack1)) != null ? stack1.logoB : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <!--\n    <a href=\"#\" class=\"navigation-back-button icon icon-controls-small-left\" data-event=\"backButton\" alt=\"Back button\"></a>\n    <a href=\"#\" class=\"navigation-drawer-toggle-button fa fa-inbox\" data-event=\"toggleDrawer\" alt=\"Drawer\"></a>\n    <div class=\"centered-buttons\">\n      <div class=\"centered-buttons-wrapper toolbar-buttons\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.courseTitle : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.moduleTitle : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        <!-<a href=\"#\" class=\"navigation-hide-button icon icon-controls-small-up\" data-event=\"hideButton\" alt=\"Hide button\"></a>->\n      </div>\n    </div>\n    -->\n</div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "          <img class=\"logo\" src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._theme : stack1)) != null ? stack1.logoB : stack1), depth0))
    + "\">\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "          ";
  stack1 = ((helper = (helper = helpers.courseTitle || (depth0 != null ? depth0.courseTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"courseTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "          ";
  stack1 = ((helper = (helper = helpers.moduleTitle || (depth0 != null ? depth0.moduleTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"moduleTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._visible : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});

this["Handlebars"]["templates"]["buttons"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "        <div class=\"buttons-marking-icon icon display-none\">\n        </div>\n";
  },"3":function(depth0,helpers,partials,data) {
  return "    <div class=\"buttons-display\">\n        <div class=\"buttons-marking-icon icon display-none\">\n        </div>\n        <div class=\"buttons-display-inner\">\n        </div>\n    </div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"buttons-inner\">\n    <div class=\"buttons-cluster clearfix\">\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._shouldDisplayAttempts : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        <button class=\"buttons-action\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\">";
  stack1 = lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.buttonText : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</button>\n        <button class=\"buttons-feedback\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\" disabled=\"true\">";
  stack1 = lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.buttonText : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</button>\n    </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._shouldDisplayAttempts : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["drawer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"drawer-inner\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.drawer : stack1), depth0))
    + "\">\n	<div class=\"drawer-toolbar clearfix\">\n		<div class=\"drawer-back-button\">\n		<button class=\"base drawer-back icon icon-controls-small-left\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n		</button>\n		</div>\n		<div class=\"drawer-close-button\">\n		<button class=\"base drawer-close icon icon-cross\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closeDrawer : stack1), depth0))
    + "\">\n		</button>\n		</div>\n	</div>\n	<div class=\"drawer-holder\">\n	</div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<button class=\"base drawer-item-open "
    + escapeExpression(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"className","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"drawer-item-title\">\n		<div class=\"drawer-item-title-inner h5\">";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n	</div>\n	<div class=\"drawer-item-description\">\n		<div class=\"drawer-item-description-inner\">";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.description : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n	</div>\n</button>";
},"useData":true});

this["Handlebars"]["templates"]["loading"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"loading\">\n    <div class=\"loader-gif\"><div role=\"heading\" tabindex=\"0\" class=\"h3\" aria-level=\"1\">Loading...</div></div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["navigation"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"navigation-inner clearfix\" role=\"navigation\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigation : stack1), depth0))
    + "\" style= \"background-color: "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._theme : stack1)) != null ? stack1.colorT : stack1), depth0))
    + "\">\n    <img class=\"logo\" src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._theme : stack1)) != null ? stack1.logoT : stack1), depth0))
    + "\"\n    <button class=\"base navigation-back-button icon icon-controls-small-left\" data-event=\"backButton\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\"></button>\n    <button class=\"base navigation-drawer-toggle-button fa fa-inbox\" data-event=\"toggleDrawer\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigationDrawer : stack1), depth0))
    + "\"></button>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notify"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "                    <div class=\"notify-popup-icon\">\n                        <div class=\"icon";
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "prompt", {"name":"if_value_equals","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "alert", {"name":"if_value_equals","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                        </div>\n                    </div>\n";
},"2":function(depth0,helpers,partials,data) {
  return " icon-question";
  },"4":function(depth0,helpers,partials,data) {
  return " icon-warning";
  },"6":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                    <div class=\"notify-popup-title\">\n                        <div class=\"notify-popup-title-inner h5\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\n                        ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                        </div>\n                    </div>\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "                    <div class=\"notify-popup-body\">\n                        <div class=\"notify-popup-body-inner\">";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n                    </div>\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                    <div class=\"notify-popup-buttons\">\n                        <button class=\"notify-popup-button notify-popup-alert-button\" role=\"button\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"confirmText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">";
  stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"confirmText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</button>\n                    </div>\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                    <div class=\"notify-popup-buttons\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._prompts : depth0), {"name":"each","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                    </div>\n";
},"13":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                            <button class=\"notify-popup-button notify-popup-prompt-button\" data-event=\""
    + escapeExpression(((helper = (helper = helpers._callbackEvent || (depth0 != null ? depth0._callbackEvent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_callbackEvent","hash":{},"data":data}) : helper)))
    + "\" role=\"button\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"promptText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">";
  stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"promptText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</button>\n";
},"15":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <button class=\"base notify-popup-done\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n                <div class=\"notify-popup-icon-close icon icon-cross\"></div>\n            </button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<div class=\"notify-popup notify-type-"
    + escapeExpression(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_type","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_classes","hash":{},"data":data}) : helper)))
    + "\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.feedbackPopUp : stack1), depth0))
    + "\">\n    <div class=\"notify-popup-inner\">\n        <div class=\"notify-popup-content\">\n            <div class=\"notify-popup-content-inner\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._showIcon : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "alert", {"name":"if_value_equals","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "prompt", {"name":"if_value_equals","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n";
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "popup", {"name":"if_value_equals","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n</div>\n\n\n<div class=\"notify-shadow\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"notify-push-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.feedbackPopUp : stack1), depth0))
    + "\">\n	<div class=\"notify-push-title\">\n		<div class=\"notify-push-title-inner h5\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\n			";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n	<div class=\"notify-push-body\">\n		<div class=\"notify-push-body-inner\">\n			";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n		</div>\n	</div>\n</div>\n<button class=\"base notify-push-close\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n	<span class=\"icon icon-cross\"></span>\n</button>\n";
},"useData":true});

this["Handlebars"]["templates"]["page"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "					    <div class=\"page-title\">\n					        <div class=\"page-title-inner h1\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\n					            ";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					        </div>\n					    </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "					    <div class=\"page-body\">\n					        <div class=\"page-body-inner\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.pageBody : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "					        </div>\n					    </div>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "					            	";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.pageBody : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "					            	";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"page-inner article-container\" role=\"main\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.page : stack1), depth0))
    + "\">\n\n    	<div class=\"page-header\">\n    		<div class=\"page-header-inner clearfix\">\n\n    			<div class=\"page-header-content\">\n    				<div class=\"page-header-content-inner\">\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n    				</div>\n    			</div>\n\n    		</div>\n    	</div>\n\n</div>\n<div class=\"aria-label relative a11y-ignore-focus prevent-default\" tabindex=\"0\" role=\"region\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.pageEnd : stack1), depth0))
    + "</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["shadow"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"shadow\" class=\"shadow display-none\"></div>";
},"useData":true});

return this["Handlebars"];

});