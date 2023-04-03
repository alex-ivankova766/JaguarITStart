import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ValidationException } from "src/exceptions/validation.exception";

@Injectable()
export class SelfAdminGuard implements CanActivate {
    
    constructor(
        private jwtService: JwtService
    ) {}

    async canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest()
        const res = context.switchToHttp().getResponse()
        const authHeader = req.headers.authorization;
        const candidateID = req.body.id || req.params.id

        try { 
            const [bearer, token] = authHeader.split(' ');

            if (bearer !== 'Bearer' || !token) {
                throw new ValidationException('Only userself or admin')
            }
            const user = this.jwtService.verify(token, {secret: process.env.JWT_ACCESS_SECRET})
            req.user = user;
            const isActivate = (candidateID == user.id) || user.email == process.env.ADMIN_MAIL
            if (!isActivate) {
                throw new ValidationException('Only userself or admin')
            }
            return true;
        } catch(e) {
            throw new ValidationException('Only userself or admin')        }
    }
    
}