import {
  Entity,
  Column,
  Generated,
  BeforeInsert,
  BeforeUpdate,
  Index,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { EntityAbstract } from '../../interfaces';
// import { RoleEntity } from './role.entity';
// import { CorporationEntity } from './corporation/corporation.entity';
// import { CorporationUserEntity } from './corporation';

//! it's yaml update commit

@Entity('users')
export class UserEntity extends EntityAbstract {
  @Column()
  fullName: string;

  @Index({ fulltext: true })
  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ default: false })
  emailVerified: boolean;

  @Column({ nullable: true })
  @Generated('uuid')
  emailToken: string;

  @Column({ nullable: true })
  verifiedAt: number;

  @Column({ type: 'text' })
  password: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  identityNumber: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password && this.password.length > 0) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }

  async comparePassword(attempt: string) {
    return await bcrypt.compare(attempt, this.password);
  }

  // @OneToMany(
  //   (type) => CorporationUserEntity,
  //   (corporationUser) => corporationUser.user
  // )
  // corporationUsers: CorporationUserEntity[];

  // @ManyToMany((type) => RoleEntity)
  // @JoinTable({ name: 'user_roles' })
  // roles: RoleEntity[];
}
