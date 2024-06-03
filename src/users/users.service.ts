import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@root/users/users.entity';
import { Repository } from 'typeorm';
import { LoginRequest } from '@root/interfaces/requests';
import { LoginResponse } from '@root/interfaces/responses';
import { ERROR_MESSAGE } from '@root/utils/constants';
import { ERole } from '@root/utils/constants/enums';
import { TokenService } from '@root/auth/token.service';
import { EncryptHelper } from '@root/utils/helpers';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly tokenService: TokenService,
  ) {}
  //   static async createCreator(user: CreateUserRequest){}
  // static async verifyCreatorEmail(id: string, email: string){}
  // static async verifyChangeEmail{}
  // static async changePassword{}
  // static async changeEmail{}
  // static async resetPassword(id: string, newPassword: string): Promise<boolean> {}
  async login(payload: LoginRequest): Promise<LoginResponse> {
    const { email, password } = payload;
    const user = await this.findByEmail(email);
    if (!user) {
      throw new BadRequestException(ERROR_MESSAGE.ENTITY_NOT_FOUND);
    }

    if (!user.verified && user.role.role === ERole.CREATOR) {
      throw new BadRequestException(ERROR_MESSAGE.EMAIL_UNVERIFIED);
    }

    if (!(await EncryptHelper.validatePassword(password, user.password))) {
      throw new BadRequestException(ERROR_MESSAGE.INVALID_LOGIN);
    }

    const { stageName, realName, role, id, systemAvatarName } = user;

    return {
      accessToken: this.tokenService.generateAccessToken(user),
      stageName,
      realName,
      systemAvatarName,
      roleName: role.role,
      id,
    };
  }
  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { email },
    });
  }
  // async getArtistInformation(id: string): Promise<ArtistResponse> {}
  // async findById(id: string) {}
  // async getCreatorInformation(id: string): Promise<CreatorResponse> {}
  // async getUserPublicInfo(id: string, role: ERole): Promise<UserPublicInfoResponse>{}
  // async getUserFullInfo(id: string): Promise<UserFullInfoResponse> {}
  // async getUsersByRole(
  //     { page, size, sortColumn, sortDirection }: ListParams,
  //     role: ERole.ARTIST | ERole.CREATOR,
  // ): Promise<AdminUserListResponse> {}
  // async getSongUsers(
  //     { page, size, sortColumn, sortDirection }: ListParams,
  //     songId: string,
  //     artistId?: string,
  // ): Promise<SongUserListResponse> {}
  // async getConnectedChannels(creatorId: string) {}
  // async updateCreatorPublicInformation(
  //     id: string,
  //     dto: UpdateCreatorPublicInformationRequest,
  //     avatar?: MulterFile,
  // ): Promise<UpdateCreatorPublicInformationResponse> {}
  // async updateCreatorPrivateInformation(
  //     id: string,
  //     dto: UpdateCreatorPrivateInformationRequest
  // ): Promise<UpdateCreatorPrivateInformationResponse> {}
  // async updateArtistPublicInfo(
  //     id: string,
  //     { stageName, bio }: UpdateArtistPublicInfoRequest,
  //     avatar?: MulterFile,
  // ): Promise<UpdateArtistInfoResponse> {}
  // async updateArtistPrivateInfo(
  //     id: string,
  //     dto: UpdateArtistPrivateInfoRequest
  // ): Promise<UpdateArtistInfoResponse> {}
  // async updatePaymentStatus(id: string): Promise<BaseUpdateResponse>{}
  // async getActualMonthlyRevenues(
  //     userId: string,
  //     { page, size, sortColumn, sortDirection }: ListParams
  // ): Promise<MonthlyRevenuesResponse> {}
  // // HELPER: Get monthly revenues query ordering
  // private getMonthlyRevenuesOrdering(
  //     sortDirection: SortDirection,
  //     sortColumn?: string
  // ): SortOrder {}
  // // HELPER: Get current month revenue of a user
  // private async getCurrentMonthRevenue(userId: string, revenueType: RevenueType): Promise<number> {}
}
