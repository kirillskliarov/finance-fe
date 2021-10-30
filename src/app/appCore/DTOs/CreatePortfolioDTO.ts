import { Expose } from 'class-transformer';

@Expose()
export class CreatePortfolioDTO {
  name: string;
}
