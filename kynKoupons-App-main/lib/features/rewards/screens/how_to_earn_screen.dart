import 'package:flutter/material.dart';
import 'package:kynkoupons/features/rewards/widgets/earn_option._item.dart';

class HowToEarnScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0xFFF8F8F8),
      appBar: AppBar(
        title: Text(
          'How to earn',
          style: TextStyle(
            color: Colors.black87,
            fontSize: 18,
            fontWeight: FontWeight.w600,
          ),
        ),
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.black87),
          onPressed: () => Navigator.pop(context),
        ),
        actions: [
          IconButton(
            icon: Icon(Icons.info_outline, color: Colors.black87),
            onPressed: () {},
          ),
        ],
      ),
      body: ListView(
        padding: EdgeInsets.all(16),
        children: [
          EarnOptionItem(
            points: '20',
            title: 'First buy',
            description: 'Unlock exclusive deals and perks with your first purchase.',
            icon: Icons.shopping_bag,
            iconColor: Colors.blue,
          ),
          SizedBox(height: 12),
          EarnOptionItem(
            points: '10',
            title: 'Save items',
            description: 'Receive price drop alerts instantly when you save items.',
            icon: Icons.notifications,
            iconColor: Colors.green,
          ),
          SizedBox(height: 12),
          EarnOptionItem(
            points: '32',
            title: 'Link email',
            description: 'Track all orders effortlessly and stay updated by linking your email.',
            icon: Icons.email,
            iconColor: Colors.purple,
          ),
          SizedBox(height: 12),
          EarnOptionItem(
            points: '100',
            title: 'Shop in-store',
            description: 'Earn more points when you shop in-store.',
            icon: Icons.store,
            iconColor: Colors.orange,
          ),
          SizedBox(height: 12),
          EarnOptionItem(
            points: '56',
            title: 'First purchase',
            description: 'Your first purchase brings exclusive benefits just for you.',
            icon: Icons.card_giftcard,
            iconColor: Colors.red,
          ),
          SizedBox(height: 12),
          EarnOptionItem(
            points: '98',
            title: 'Connect a card',
            description: 'Connect a card and earn more points.',
            icon: Icons.credit_card,
            iconColor: Colors.teal,
          ),
        ],
      ),
    );
  }
}
