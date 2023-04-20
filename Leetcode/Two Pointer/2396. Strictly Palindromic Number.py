# 2023.04.20
import string

class Solution(object):
    def isStrictlyPalindromic(self, n):

        tmp = string.digits+string.ascii_lowercase
        def convert(num, base) :
            q, r = divmod(num, base)
            if q == 0 :
                return tmp[r] 
            else :
                return convert(q, base) + tmp[r]
        
        for num in range(2, n-1):
            target = convert(n, num)

            l_pointer = 0
            r_pointer = len(target) - 1

            for i in range(len(target) // 2):
                if target[l_pointer + i] != target[r_pointer - i]:
                    return False

        return True

# sol = Solution()
# sol.isStrictlyPalindromic(9)