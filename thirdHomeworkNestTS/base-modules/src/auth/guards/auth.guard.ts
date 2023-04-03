import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(
        private jwtService: JwtService
    ) {}

    async canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest()
        const authHeader = req.headers.authorization;

        try { 
            const [bearer, token] = authHeader.split(' ');
            if (bearer !== 'Bearer' || !token) {
            throw new UnauthorizedException({message: 'You are not authorized'});
        }
            const user = this.jwtService.verify(token, {secret: process.env.JWT_ACCESS_SECRET})
            req.user = user;
            return true;
        } catch(e) {
            console.log(e);
            throw new UnauthorizedException({message: 'You are not authorized'});
        }
    }
    
}