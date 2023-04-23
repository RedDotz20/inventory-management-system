import { Request, Response } from 'express';

export const blacklist = new Set<string>();

async function logout(req: Request, res: Response) {
  try {
    const refreshToken: string = req.cookies.refreshToken;
    blacklist.add(refreshToken);

    res.clearCookie('refreshToken', { httpOnly: true });
    console.log('Logout Successful');

    return res.status(200).json({ message: 'Logout Successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
}

export default { logout };
