import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class User {
  @Expose({ toPlainOnly: true })
  uuid: string;

  @Expose()
  username: string;

  // accounts: Account[];

  // portfolios: Portfolio[];

  // sessions: Session[];
}
