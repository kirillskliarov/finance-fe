export type findSecurityKeys = 'secid' | 'uuid';

export type FindSecurityRequest = {
  [key in findSecurityKeys]: string;
};
