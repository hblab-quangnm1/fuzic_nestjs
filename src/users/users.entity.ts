import { BaseEntity } from '@root/common/base/base-entity';
import { TABLE_NAME } from '@root/utils/constants';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Role } from './role.entity';

@Entity(TABLE_NAME.USER)
export class User extends BaseEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  realName: string;

  @Column({ nullable: true })
  stageName: string;

  @Column({ nullable: true })
  systemAvatarName: string;

  @Column({ default: false })
  completeProfile: boolean;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ nullable: true })
  dob: Date;

  @Column({ nullable: true })
  phone: string;

  @Column({ default: false })
  verified: boolean;

  @Column({ nullable: true })
  youtubeChannel: string; // for display purposes only

  @Column({ nullable: true })
  roleId: string;

  @Column({ nullable: true })
  addressId: string;

  @Column({ nullable: true })
  bankAccountId: string;

  @Column({ default: 0 })
  estimatedTotalRevenue: number;

  @Column({ default: 0 })
  actualTotalRevenue: number;

  @Column({ default: false })
  fullyPaid: boolean;

  // Relations
  @ManyToOne(() => Role, (role) => role.users)
  role: Role;
}
