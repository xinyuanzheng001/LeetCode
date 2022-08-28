/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let result = new ListNode(0);
    let ret = result;
    while(l1 || l2) {
        if(!l1) {
            result.val = l2.val + carry;
            l2 = l2.next;
        } else if(!l2) {
            result.val = l1.val + carry;
            l1 = l1.next;
        } else {
            result.val = l1.val + l2.val + carry;
            l1 = l1.next;
            l2 = l2.next;
        }
        if(result.val >= 10) {
            result.val %= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        if(l1 || l2) {
            result.next = new ListNode(0);
            result = result.next;
        } else {
            if(carry === 1) {
                result.next = new ListNode(1)
            }
        }
    }
    return ret;
};