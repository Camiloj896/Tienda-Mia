
INSERT INTO `status` (`id`, `name`) VALUES
(1, 'Approve'),
(2, 'Cancel'),
(3, 'Delivery'),
(4, 'Traveling');


INSERT INTO `order` (`id`, `createDate`, `cliente`, `shippingAddress`, `shippingPromise`, `statusId`) VALUES
(1, '2023-07-28 05:00:00', 'lorem ipsum', 'Cll 65 sur # 56 -90', '2023-07-24', 1),
(2, '2023-07-28 05:00:00', 'lorem ipsum', 'Cll 65 sur # 56 -90', '2023-07-27', 4),
(3, '2023-07-28 05:00:00', 'lorem ipsum', 'Cll 65 sur # 56 -90', '2023-07-24', 3),
(4, '2023-07-28 05:00:00', 'lorem ipsum', 'Cll 65 sur # 56 -90', '2023-07-24', 2),
(5, '2023-07-28 05:00:00', 'lorem ipsum', 'Cll 65 sur # 56 -90', '2023-07-24', 1),
(6, '2023-07-28 05:00:00', 'lorem ipsum', 'Cll 65 sur # 56 -90', '2023-07-24', 4);


INSERT INTO `item` (`id`, `title`, `description`, `url`, `price`, `quantity`, `orderId`) VALUES
(1, 'This is static title #1.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 45655, 2, 1),
(2, 'This is static title #2.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 5765, 10, 1),
(3, 'This is static title #3.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 456456, 3, 2),
(4, 'This is static title #4.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 8545, 1, 2),
(5, 'This is static title #5.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 4556, 3, 2),
(6, 'This is static title #6.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 6885, 4, 3),
(7, 'This is static title #7.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 68884, 3, 4),
(8, 'This is static title #8.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 458885, 5, 4),
(9, 'This is static title #9.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 4411, 2, 4),
(10, 'This is static title #10.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 2222, 10, 4),
(11, 'This is static title #11.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 45655, 2, 4),
(12, 'This is static title #12.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 5765, 10, 4),
(13, 'This is static title #13.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 456456, 3, 4),
(14, 'This is static title #14.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 8545, 1, 4),
(15, 'This is static title #15.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 4556, 3, 4),
(16, 'This is static title #16.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 6885, 4, 5),
(17, 'This is static title #17.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 68884, 3, 5),
(18, 'This is static title #18.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 458885, 5, 5),
(19, 'This is static title #19.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 4411, 2, 5),
(20, 'This is static title #20.', 'this is static description', 'http://dacon.rwdc.sg/wp-content/uploads/2021/01/test-product.png', 2222, 10, 5);

-- --------------------------------------------------------
