describe('import sidebar', () => {
    test('normal imports as expected', async () => {
        const cmp = await import ('@/components/Sidebar/Sidebar.vue')
        expect(cmp).toBeDefined()
    })
})