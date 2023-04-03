import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AdminGuard implements CanActivate {
    
    constructor(
        private jwtService: JwtService
    ) {}

    async canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest()
        const res = context.switchToHttp().getResponse()
        const authHeader = req.headers.authorization;

        try { 
            const [bearer, token] = authHeader.split(' ');

            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException({message: 'Access denied: admin only'});
            }
            const user = this.jwtService.verify(token, {secret: process.env.JWT_ACCESS_SECRET})
            req.user = user;
            const isActivate = user.email == process.env.ADMIN_MAIL
            if (!isActivate) {
                throw new UnauthorizedException({message: 'Access denied: admin only'});
            }
            return true;
        } catch(e) {
            throw new UnauthorizedException({message: 'Access denied: admin only'});
        }
    }
    
}