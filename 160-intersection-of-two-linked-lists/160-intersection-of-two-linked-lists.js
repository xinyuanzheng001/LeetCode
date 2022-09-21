/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let result = [];
    while(headA) {
        result.push(headA);
        headA = headA.next;
    }
    while(headB) {
        if(result.includes(headB)) return headB;
        headB = headB.next;
    }
};