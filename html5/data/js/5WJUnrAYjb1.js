window.globalProvideData('slide', '{"title":"SOAL 2","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":33,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide33","width":720,"height":405,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5WJUnrAYjb1","actionGroups":{"ReviewInt_6my53Neax8p":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5opgL83Gq2y"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6q1klY10qVS.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6my53Neax8p_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6my53Neax8p_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6my53Neax8p","typea":"var","valueb":"5iLYrXZOYm3","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5iLYrXZOYm3.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6my53Neax8p"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5iLYrXZOYm3.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6my53Neax8p"}]}]}]},"ReviewIntCorrectIncorrect_6my53Neax8p":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6my53Neax8p_ReviewShape"}}]},"AnsweredInt_6my53Neax8p":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6my53Neax8p"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6my53Neax8p":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5opgL83Gq2y"},"enabled":{"type":"boolean","value":false}}]},"6my53Neax8p_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6q1klY10qVS.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5iLYrXZOYm3.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6my53Neax8p"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6q1klY10qVS.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6q1klY10qVS.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6my53Neax8p"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_5WJUnrAYjb1":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6Zk4w2dIsbV"}}]},"NavigationRestrictionPreviousSlide_5WJUnrAYjb1":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6Ls5OMGNvuD","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6Ls5OMGNvuD","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6my53Neax8p","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6my53Neax8p"}],"elseActions":[{"kind":"exe_actiongroup","id":"6my53Neax8p_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6my53Neax8p","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6my53Neax8p","typea":"var","valueb":"5iLYrXZOYm3","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5iLYrXZOYm3"},"completed_slide_ref":{"type":"string","value":"_player.6F9yrRk0jYe.5i7N2pUI167"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6my53Neax8p","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6my53Neax8p","typea":"var","valueb":"5iLYrXZOYm3","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5iLYrXZOYm3"},"completed_slide_ref":{"type":"string","value":"_player.6F9yrRk0jYe.5i7N2pUI167"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5WJUnrAYjb1"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5WJUnrAYjb1"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":279,"id":"5c1Q0IKmKo8"},{"kind":"audio","assetId":280,"id":"6IISIvS3sKN"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":67996,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6hNBwBJ1FKi"}},{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"6my53Neax8p_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5opgL83Gq2y"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5WRoq81htJ4"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5rIu28ZV6pa"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6iEH94AWVSa"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"6IISIvS3sKN"}},{"kind":"media_play","objRef":{"type":"string","value":"6IISIvS3sKN"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6IISIvS3sKN"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":269,"id":"01","url":"story_content/6doxw4HhsQv_80_DX1440_DY1440.jpg","type":"normal","altText":"BACKGROUND_LAUT2-01.jpg","width":1440,"height":810,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":202.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":405,"altText":"BACKGROUND_LAUT2-01.jpg","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":405,"strokewidth":0}},"width":720,"height":405,"resume":true,"useHandCursor":true,"id":"6hNBwBJ1FKi"},{"kind":"textinput","bindto":"","align":"center","verticalAlign":"top","rtl":false,"numeric":false,"multiline":true,"maxchars":0,"placeholder":"","fontsize":25,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":64,"yPos":202,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":295.5,"rotateYPos":31.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"5opgL83Gq2y","linkId":"","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":572,"height":64,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":273}}},"html5data":{"xPos":0,"yPos":0,"width":592,"height":64,"strokewidth":1}},"width":592,"height":64,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":593,"bottom":65,"altText":"Text Entry","pngfb":false,"pr":{"l":"Lib","i":272}}},"id":"5opgL83Gq2y","events":[{"kind":"onlosefocus","actions":[]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"eval_interaction","id":"_parent.6q1klY10qVS"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5WRoq81htJ4_765025168","id":"01","linkId":"txt__default_5WRoq81htJ4","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":628,"height":29,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Isilah dengan jawaban yang tepat!","style":{"fontSize":16,"fontIsBold":false,"fontFamily":"\\"Open SansBold CharsBoldE47A47C6\\",\\"Open Sans\\"","ascent":22.802,"descent":6.25,"leading":0,"underlinePosition":-1.604,"underlineThickness":1.063,"xHeight":11.646}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":33,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":375,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":274}}}],"shapemaskId":"","xPos":36,"yPos":25,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":19.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":648,"bottom":39,"altText":"Isilah dengan jawaban yang tepat!","pngfb":false,"pr":{"l":"Lib","i":266}},"html5data":{"xPos":0,"yPos":0,"width":648,"height":39,"strokewidth":0}},"width":648,"height":39,"resume":true,"useHandCursor":true,"id":"5WRoq81htJ4"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5fQXNAbZIFR_-652579283","id":"01","linkId":"txt__default_5rIu28ZV6pa","type":"acctext","xPos":4,"yPos":2,"xAccOffset":4,"yAccOffset":2,"width":136,"height":36,"valign":"center","wordwrap":true,"textshadow":true,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"SUBMIT","style":{"fontFamily":"\\"Open SansBold CharsBoldE47A47C6\\",\\"Open Sans\\"","ascent":19.952,"descent":5.469,"leading":0,"underlinePosition":-1.404,"underlineThickness":0.93,"xHeight":10.19,"fontIsBold":false}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":6,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":14,"fontIsBold":true,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"shadow":{"offsetX":0.8,"offsetY":0.8,"color":"#969696"},"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":109,"bottom":33,"pngfb":false,"pr":{"l":"Lib","i":279}}}],"shapemaskId":"","xPos":528,"yPos":330,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":72,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":144,"bottom":40,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":275}},"html5data":{"xPos":0,"yPos":0,"width":144,"height":40,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":144,"bottom":40,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":275}},"html5data":{"xPos":-1,"yPos":-1,"width":145,"height":41,"strokewidth":0}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":146,"bottom":42,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":276}},"html5data":{"xPos":-3,"yPos":-3,"width":149,"height":45,"strokewidth":3}}},{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":144,"bottom":40,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":275}},"html5data":{"xPos":-1,"yPos":-1,"width":145,"height":41,"strokewidth":0}}},{"kind":"state","name":"_default_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":144,"bottom":40,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":275}},"html5data":{"xPos":-1,"yPos":-1,"width":145,"height":41,"strokewidth":0}}},{"kind":"state","name":"_default_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":146,"bottom":42,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":276}},"html5data":{"xPos":-3,"yPos":-3,"width":149,"height":45,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":145,"bottom":41,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":277}},"html5data":{"xPos":-2,"yPos":-2,"width":147,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":145,"bottom":41,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":277}},"html5data":{"xPos":-2,"yPos":-2,"width":147,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":146,"bottom":42,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":276}},"html5data":{"xPos":-3,"yPos":-3,"width":149,"height":45,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":145,"bottom":41,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":277}},"html5data":{"xPos":-2,"yPos":-2,"width":147,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":145,"bottom":41,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":278}},"html5data":{"xPos":-2,"yPos":-2,"width":147,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":146,"bottom":42,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":276}},"html5data":{"xPos":-3,"yPos":-3,"width":149,"height":45,"strokewidth":3}}}],"width":144,"height":40,"resume":true,"useHandCursor":true,"id":"5rIu28ZV6pa","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_hover","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.5c1Q0IKmKo8"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.5c1Q0IKmKo8"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.5c1Q0IKmKo8"}}],"elseActions":[{"kind":"media_pause","objRef":{"type":"string","value":"_parent.5c1Q0IKmKo8"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.5c1Q0IKmKo8"}}]}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetVisitedState","scopeRef":{"type":"string","value":"_this"}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"_parent.5opgL83Gq2y.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_parent.6q1klY10qVS"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6Ls5OMGNvuD.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6iEH94AWVSa_152266673","id":"01","linkId":"txt__default_6iEH94AWVSa","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":612,"height":67,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Kue Lam khas banjarmasin menggunkana teknik pengolahan ?","style":{"fontSize":18,"fontIsBold":false,"foregroundColor":"#262626","linkColor":"#262626","fontFamily":"\\"Open SansBold CharsBoldE47A47C6\\",\\"Open Sans\\"","ascent":25.652,"descent":7.031,"leading":0,"underlinePosition":-1.805,"underlineThickness":1.195,"xHeight":13.102}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":56,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":603,"bottom":72,"pngfb":false,"pr":{"l":"Lib","i":281}}}],"shapemaskId":"","xPos":48,"yPos":90,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":316,"rotateYPos":38.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":633,"bottom":78,"altText":"Kue Lam khas banjarmasin menggunkana teknik pengolahan ?","pngfb":false,"pr":{"l":"Lib","i":280}},"html5data":{"xPos":0,"yPos":0,"width":632,"height":77,"strokewidth":1}},"width":632,"height":77,"resume":true,"useHandCursor":true,"id":"6iEH94AWVSa"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6my53Neax8p_CorrectReview","id":"01","linkId":"6my53Neax8p_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":269}}}],"shapemaskId":"","xPos":0,"yPos":365,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":268}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6my53Neax8p_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6my53Neax8p_IncorrectReview","id":"01","linkId":"6my53Neax8p_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":271}}}],"shapemaskId":"","xPos":0,"yPos":365,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":270}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6my53Neax8p_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_6my53Neax8p_ReviewShape","id":"01","linkId":"txt_6my53Neax8p_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":196,"bottom":368,"pngfb":false,"pr":{"l":"Lib","i":283}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":5,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":159,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":700,"bottom":468,"altText":"","pngfb":false,"pr":{"l":"Lib","i":282}},"html5data":{"xPos":1,"yPos":1,"width":698,"height":466,"strokewidth":1}},"width":648,"height":318,"resume":false,"useHandCursor":true,"id":"6my53Neax8p_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');