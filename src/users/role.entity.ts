// Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29

import { Column, Entity, OneToMany, Relation } from 'typeorm';

import { BaseEntity } from '@root/common/base/base-entity';
import { ERole } from '@root/utils/constants/enums';
import { User } from './users.entity';
import { TABLE_NAME } from '@root/utils/constants';

@Entity(TABLE_NAME.ROLE)
export class Role extends BaseEntity {
  @Column({
    type: 'enum',
    enum: ERole,
    unique: true,
  })
  role: ERole;

  @OneToMany(() => User, (user) => user.role)
  users: Relation<User[]>;
}
