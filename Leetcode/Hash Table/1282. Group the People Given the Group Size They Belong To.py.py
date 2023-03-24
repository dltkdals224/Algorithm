# 2023.03.24
class Solution(object):
    def groupThePeople(self, groupSizes):
        ans = []
        tmp = []
        targetList = (sorted(list(enumerate(groupSizes)), key=lambda x: x[1]))
        for target in targetList:
            tmp.append(target[0])
            if(len(tmp) == target[1]):
                ans.append(tmp)
                tmp = []
        return ans