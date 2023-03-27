# 2023.03.27
from collections import defaultdict

class Solution(object):
    def subdomainVisits(self, cpdomains):
        ans = []
        dic = defaultdict(int)

        for domain in cpdomains:
            time = domain.split(' ')[0]
            url = domain.split(' ')[1]

            split_url = url.split('.')

            for i in range(len(split_url)):
                dic['.'.join(split_url)] += int(time)
                del split_url[0]

        for item in dic.items():
            ans.append(str(item[1]) + ' ' + item[0])

        return ans

# sol = Solution()
# sol.subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"])
