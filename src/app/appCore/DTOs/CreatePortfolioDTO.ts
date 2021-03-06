import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatePortfolioDTO {
  @Expose()
  name: string;
}
