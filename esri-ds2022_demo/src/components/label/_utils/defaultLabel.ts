export const defaultLabelProps = (layer: __esri.FeatureLayer): any => {
  const defaultFieldName = defaultLabelField(layer);
  return {
    // autocasts as new LabelClass()
    symbol: {
      type: "text",
      color: "#696969",
      font: {
        family: "Arial",
        size: 13 * 0.75
      }
    },
    labelExpressionInfo: { expression: `$feature["${defaultFieldName}"]` },
    labelPlacement: "above-center",
    maxScale: layer.maxScale || 0,
    minScale: layer.minScale || 0
  };
};

const defaultLabelField = (layer: __esri.FeatureLayer): string => {
  // displayField or 1st string field
  if (layer.displayField && layer.fieldsIndex.get(layer.displayField)) {
    return layer.displayField;
  } else {
    layer.fields.find((field: __esri.Field) => {
      if (field.type.toLowerCase().includes("string")) {
        return field.name;
      }
    });
  }
  return layer.fields[0].name;
};
