import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateBrokerDTO {
  @Expose()
  name: string;
}
