export const id = "EVENT_CAMERA_SET_BOUNDS_4_1";
export const name = "Set camera bounds (4.1)";
export const groups = ["EVENT_GROUP_CAMERA"];

export const autoLabel = (fetchArg) => {
  return `Set camera bounds (4.1)`;
};

export const fields = [
  {
    key: `min_scroll_x`,
    label: "Min Scroll X",
    type: "value",
    defaultValue: {
      type: "number",
      value: 0,
    },
  }, 
  {
    key: `min_scroll_y`,
    label: "Min Scroll Y",
    type: "value",
    defaultValue: {
      type: "number",
      value: 0,
    },
  }, 
  {
    key: `max_scroll_x`,
    label: "Max Scroll X",
    type: "value",
    defaultValue: {
      type: "number",
      value: 0,
    },
  }, 
  {
    key: `max_scroll_y`,
    label: "Max Scroll Y",
    type: "value",
    defaultValue: {
      type: "number",
      value: 0,
    },
  }, 
];

export const compile = (input, helpers) => {
 const { _addComment, _declareLocal, variableSetToScriptValue, _addNL, appendRaw, _offsetStackAddr } = helpers;	
	
	const tmp0 = _declareLocal("tmp0", 1, true);
	const tmp1 = _declareLocal("tmp1", 1, true);	
	const tmp2 = _declareLocal("tmp2", 1, true);
	const tmp3 = _declareLocal("tmp3", 1, true);
	
	variableSetToScriptValue(tmp0, input.min_scroll_x);	
	variableSetToScriptValue(tmp1, input.min_scroll_y);
	variableSetToScriptValue(tmp2, input.max_scroll_x);
	variableSetToScriptValue(tmp3, input.max_scroll_y);
   
  _addComment("Camera Set Bounds");
  appendRaw(
	`VM_RPN
            .R_REF ${_offsetStackAddr(tmp0)}
            .R_REF_MEM_SET .MEM_I16, _scroll_x_min
            .R_REF ${_offsetStackAddr(tmp1)}
            .R_REF_MEM_SET .MEM_I16, _scroll_y_min
            .R_REF ${_offsetStackAddr(tmp2)}
            .R_REF_MEM_SET .MEM_I16, _scroll_x_max
            .R_REF ${_offsetStackAddr(tmp3)}
            .R_REF_MEM_SET .MEM_I16, _scroll_y_max
            .R_STOP`
	);
		  
    _addNL();
};
