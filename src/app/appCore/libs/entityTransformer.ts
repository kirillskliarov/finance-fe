import { TransformationType, TransformFnParams } from 'class-transformer';

export function entityTransformer(params: TransformFnParams): any | string {
  switch (params.type) {
    case TransformationType.PLAIN_TO_CLASS:
      return params.value;
    case TransformationType.CLASS_TO_PLAIN:
      return { uuid: params.value.uuid };
    default:
      return params.value;
  }
}
