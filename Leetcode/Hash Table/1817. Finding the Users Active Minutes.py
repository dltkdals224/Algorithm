class Solution(object):
    def findingUsersActiveMinutes(self, logs, k):
        ansArr = [0] * k
        dic = {}
        for target in logs:
            if(target[0] not in dic):
                dic[target[0]] = [target[1]]
            else:
                if(dic[target[0]].count(target[1])):
                    continue
                else:
                    dic[target[0]].append(target[1])
        
        for target in dic.values():
            ansArr[len(target)-1] += 1

        return ansArr