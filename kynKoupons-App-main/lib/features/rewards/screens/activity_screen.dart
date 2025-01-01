import 'package:flutter/material.dart';
import 'package:kynkoupons/features/rewards/widgets/action_button.dart';

class ActivityScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0xFFF8F8F8),
      appBar: AppBar(
        title: Text(
          'Activity',
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
          RewardActivityItem(
            date: '09, Jan 24',
            time: '6:50 PM',
            description: 'Bought your first purchase at Nike stores',
            points: 20,
          ),
          Divider(),
          RewardActivityItem(
            date: '04, Jan 24',
            time: '8:00 AM',
            description: 'Nike Air Jordan M1 shoes 50% cash back',
            points: 50,
            isPositive: false,
          ),
          Divider(),
          RewardActivityItem(
            date: '14, Jan 24',
            time: '2:50 PM',
            description: 'Save items and get price drop alerts',
            points: 100,
          ),
          Divider(),
          RewardActivityItem(
            date: '12, Jan 24',
            time: '9:40 AM',
            description: 'Make your first purchase',
            points: 32,
          ),
          Divider(),
          RewardActivityItem(
            date: '09, Jan 24',
            time: '6:50 PM',
            description: 'Make your first purchase in Nike stores',
            points: 20,
          ),
        ],
      ),
    );
  }
}