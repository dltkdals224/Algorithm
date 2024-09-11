# 2023.04.06
def solution(phone_book):
    dic = {}
    for number in phone_book:
        dic[number] = -1

    for number in phone_book:
        for s in range(len(number)):
            if(number[:s] in dic):
                return False
            
    return True
    
solution(["123", "456", "789"])
# solution(["119", "97674223", "1195524421"])  # false