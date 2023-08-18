import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userLoginGuard: CanActivateFn = (route, state) => {
  const userLogin = localStorage.getItem('userLogin');
  const router = inject(Router)
  if (userLogin !== null) {
    return true;
  }
  return router.navigate(['/login'])
};
