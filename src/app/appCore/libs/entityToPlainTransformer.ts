export function entityToPlainTransformer({ value }: { value: { uuid: string } }): string {
  return value.uuid;
}
